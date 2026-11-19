# Two-Way Sync: TanTables + Google Sheets

## A Comprehensive Blueprint

---

## ARCHITECTURE OVERVIEW

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│Google Sheets │◄───►│  Supabase    │◄───►│  Next.js     │
│  (Source)    │     │  (Hub/DB)    │     │  (Frontend)  │
└──────┬──────┘     └──────┬───────┘     └──────┬───────┘
       │                   │                     │
       │   Webhooks/Poll   │   Realtime Sub     │
       └───────────────────┘─────────────────────┘
```

---

## 1. THE SYNC ENGINE (The Hardest Part)

### The Core Problem

Google Sheets has **no native webhook on free tier**. This is your biggest challenge. Here's how to solve it.

### Solution: Hybrid Polling + Apps Script Push

```
SHEET → SUPABASE (Inbound Sync)
─────────────────────────────────
Option A: Google Apps Script (FREE, best option)
- Attach an onEdit trigger to each connected sheet
- The trigger sends a POST to your Next.js API route
- Your API route diffs and updates Supabase

Option B: Polling Fallback
- Cron job via Vercel (hobby tier = 1 per day... problem)
- OR use Supabase Edge Function cron (free tier = limited)
- Poll every 5 min using GitHub Actions cron (FREE, 💡genius hack)

SUPABASE → SHEET (Outbound Sync)
─────────────────────────────────
- Supabase Database Webhook on row changes
- Fires a Next.js API route
- Batches changes and writes to Google Sheets API
- Debounce: collect changes for 30 seconds, then batch write
```

### The GitHub Actions Cron Hack (Free Polling)

```yaml
# .github/workflows/sync-sheets.yml
name: Sync Google Sheets
on:
  schedule:
    - cron: '*/5 * * * *'  # Every 5 minutes (FREE)
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger sync endpoint
        run: |
          curl -X POST https://yourapp.vercel.app/api/sync/poll \
            -H "Authorization: Bearer ${{ secrets.SYNC_SECRET }}" \
            -H "Content-Type: application/json"
```

> **This gives you free 5-minute polling** without paying for any cron service.

### Conflict Resolution Strategy

```
CONFLICT SCENARIO:
User edits cell A1 on Sheets AND someone edits A1 on frontend

RESOLUTION STRATEGY:
┌─────────────────────────────────┐
│  1. Last-Write-Wins (simple)    │
│  2. Timestamp comparison        │
│  3. Cell-level versioning       │
│  4. Queue + Admin resolution    │
└─────────────────────────────────┘

RECOMMENDED: Timestamp-based with cell-level granularity

Schema:
  cell_changes (
    id, sheet_id, row, col,
    old_value, new_value,
    source ENUM('sheets','frontend'),
    timestamp,
    synced BOOLEAN DEFAULT false
  )
```

---

## 2. DATABASE SCHEMA (Supabase)

```sql
-- ==========================================
-- CORE TABLES
-- ==========================================

-- Users & Auth (leverages Supabase Auth)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT CHECK (role IN ('admin','editor','viewer')) DEFAULT 'viewer',
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Site settings
CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- INSERT defaults
INSERT INTO settings VALUES
  ('registrations_enabled', 'true'),
  ('site_title', '"SheetCMS"'),
  ('monetization_api', '{"provider":"shrinkme","api_key":""}'),
  ('default_theme', '"light"');

-- ==========================================
-- CATEGORIES (2-level deep)
-- ==========================================
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  parent_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),

  -- Enforce max 2 levels
  CONSTRAINT max_depth CHECK (
    parent_id IS NULL OR
    NOT EXISTS (
      SELECT 1 FROM categories p
      WHERE p.id = parent_id AND p.parent_id IS NOT NULL
    )
  )
);

-- ==========================================
-- SHEETS (Posts)
-- ==========================================
CREATE TABLE sheets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  google_sheet_url TEXT NOT NULL,
  google_sheet_id TEXT NOT NULL,          -- extracted from URL
  google_sheet_gid TEXT DEFAULT '0',     -- specific tab
  category_id UUID REFERENCES categories(id),
  owner_id UUID REFERENCES profiles(id),

  -- Sync metadata
  last_synced_at TIMESTAMPTZ,
  sync_status TEXT CHECK (sync_status IN
    ('idle','syncing','error','queued')) DEFAULT 'idle',
  sync_direction TEXT CHECK (sync_direction IN
    ('bidirectional','sheet_to_app','app_to_sheet')) DEFAULT 'bidirectional',
  sync_error TEXT,

  -- Display settings
  table_config JSONB DEFAULT '{}',      -- TanTable options
  is_published BOOLEAN DEFAULT false,
  featured_image TEXT,
  seo_meta JSONB DEFAULT '{}',

  -- Content (WYSIWYG above/below table)
  content_above TEXT,                    -- Markdown/HTML
  content_below TEXT,

  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- SHEET DATA (The actual cell data)
-- ==========================================
CREATE TABLE sheet_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sheet_id UUID REFERENCES sheets(id) ON DELETE CASCADE,
  row_index INT NOT NULL,
  data JSONB NOT NULL,                   -- {col_0: "val", col_1: "val", ...}
  row_hash TEXT,                         -- For diff detection
  updated_at TIMESTAMPTZ DEFAULT now(),

  UNIQUE(sheet_id, row_index)
);

-- ==========================================
-- COLUMN CONFIGURATION
-- ==========================================
CREATE TABLE column_configs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sheet_id UUID REFERENCES sheets(id) ON DELETE CASCADE,
  column_key TEXT NOT NULL,              -- col_0, col_1, etc.
  display_name TEXT,
  sort_order INT DEFAULT 0,

  -- Display type
  display_type TEXT CHECK (display_type IN (
    'text','link','image','audio','video',
    'document','number','date','boolean','badge'
  )) DEFAULT 'text',

  -- Monetization
  is_monetized BOOLEAN DEFAULT false,
  monetized_column_key TEXT,            -- auto-created shortened link column

  -- Transformations
  prefix TEXT,
  suffix TEXT,
  find_replace JSONB DEFAULT '[]',      -- [{find: "x", replace: "y"}, ...]

  -- Visibility
  is_visible BOOLEAN DEFAULT true,
  is_sortable BOOLEAN DEFAULT true,
  is_filterable BOOLEAN DEFAULT true,
  is_searchable BOOLEAN DEFAULT true,
  width TEXT,                            -- "200px", "auto", "20%"

  -- Frontend behavior
  render_config JSONB DEFAULT '{}',
  -- For images: {thumbnail_size: "64x64", lightbox: true}
  -- For audio: {show_player: true, allow_download: true}
  -- For video: {fetch_thumbnail: true, embed: false}
  -- For docs: {show_preview: true, preview_pages: 1}

  UNIQUE(sheet_id, column_key)
);

-- ==========================================
-- PERMISSIONS (Allowed Emails per Sheet)
-- ==========================================
CREATE TABLE sheet_permissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sheet_id UUID REFERENCES sheets(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  permission TEXT CHECK (permission IN ('view','edit','admin'))
    DEFAULT 'view',
  synced_to_google BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),

  UNIQUE(sheet_id, email)
);

-- ==========================================
-- SYNC LOG (Audit Trail)
-- ==========================================
CREATE TABLE sync_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sheet_id UUID REFERENCES sheets(id) ON DELETE CASCADE,
  direction TEXT CHECK (direction IN ('inbound','outbound')),
  cells_changed INT DEFAULT 0,
  rows_added INT DEFAULT 0,
  rows_deleted INT DEFAULT 0,
  status TEXT CHECK (status IN ('success','partial','failed')),
  error_details TEXT,
  duration_ms INT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ==========================================
-- MONETIZATION TRACKING
-- ==========================================
CREATE TABLE shortened_links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sheet_id UUID REFERENCES sheets(id) ON DELETE CASCADE,
  column_key TEXT NOT NULL,
  row_index INT NOT NULL,
  original_url TEXT NOT NULL,
  shortened_url TEXT,
  provider TEXT,                         -- shrinkme, ouo, exeio
  clicks INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),

  UNIQUE(sheet_id, column_key, row_index)
);

-- ==========================================
-- ROW LEVEL SECURITY
-- ==========================================
ALTER TABLE sheets ENABLE ROW LEVEL SECURITY;
ALTER TABLE sheet_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE column_configs ENABLE ROW LEVEL SECURITY;

-- Admin sees everything
CREATE POLICY admin_all ON sheets FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Published sheets visible to all
CREATE POLICY public_read ON sheets FOR SELECT
  USING (is_published = true);

-- Owners can edit their sheets
CREATE POLICY owner_edit ON sheets FOR ALL
  USING (owner_id = auth.uid());

-- Permitted users can view/edit
CREATE POLICY permitted_users ON sheet_data FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM sheet_permissions sp
      WHERE sp.sheet_id = sheet_data.sheet_id
      AND sp.email = (
        SELECT email FROM profiles WHERE id = auth.uid()
      )
      AND sp.permission IN ('edit','admin')
    )
  );

-- ==========================================
-- INDEXES
-- ==========================================
CREATE INDEX idx_sheet_data_sheet ON sheet_data(sheet_id);
CREATE INDEX idx_sheet_data_lookup ON sheet_data(sheet_id, row_index);
CREATE INDEX idx_column_configs_sheet ON column_configs(sheet_id);
CREATE INDEX idx_sync_log_sheet ON sync_log(sheet_id, created_at DESC);
CREATE INDEX idx_categories_parent ON categories(parent_id);
CREATE INDEX idx_sheets_category ON sheets(category_id);
CREATE INDEX idx_sheets_slug ON sheets(slug);

-- ==========================================
-- FUNCTIONS
-- ==========================================

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sheets_updated
  BEFORE UPDATE ON sheets
  FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER sheet_data_updated
  BEFORE UPDATE ON sheet_data
  FOR EACH ROW EXECUTE FUNCTION update_timestamp();
```

---

## 3. API ROUTES STRUCTURE

```
app/
├── api/
│   ├── auth/
│   │   ├── register/route.ts
│   │   └── callback/route.ts
│   │
│   ├── sync/
│   │   ├── poll/route.ts          ← GitHub Actions hits this
│   │   ├── inbound/route.ts       ← Apps Script hits this
│   │   ├── outbound/route.ts      ← Supabase webhook hits this
│   │   └── full/[sheetId]/route.ts ← Force full re-sync
│   │
│   ├── sheets/
│   │   ├── route.ts               ← CRUD sheets
│   │   ├── [id]/route.ts
│   │   ├── [id]/data/route.ts     ← Cell/row CRUD
│   │   ├── [id]/columns/route.ts  ← Column config
│   │   └── [id]/permissions/route.ts
│   │
│   ├── categories/
│   │   └── route.ts
│   │
│   ├── monetize/
│   │   ├── shorten/route.ts       ← Bulk shorten links
│   │   └── stats/route.ts
│   │
│   ├── media/
│   │   ├── thumbnail/route.ts     ← Proxy image thumbnails
│   │   └── preview/route.ts       ← PDF/video preview gen
│   │
│   └── admin/
│       ├── settings/route.ts
│       └── users/route.ts
│
├── admin/
│   ├── layout.tsx                 ← Admin shell
│   ├── page.tsx                   ← Dashboard
│   ├── sheets/
│   │   ├── page.tsx               ← List all sheets
│   │   ├── new/page.tsx           ← Create from URL
│   │   └── [id]/
│   │       ├── page.tsx           ← Edit sheet/table config
│   │       ├── columns/page.tsx   ← Column configuration
│   │       ├── permissions/page.tsx
│   │       └── editor/page.tsx    ← WYSIWYG content editor
│   ├── categories/page.tsx
│   ├── users/page.tsx
│   └── settings/page.tsx
│
├── (frontend)/
│   ├── layout.tsx
│   ├── page.tsx                   ← Homepage / sheet listing
│   ├── category/
│   │   └── [slug]/page.tsx
│   └── sheet/
│       └── [slug]/page.tsx        ← Individual sheet view
│
└── components/
    ├── table/
    │   ├── DataTable.tsx          ← TanStack Table wrapper
    │   ├── cells/
    │   │   ├── ImageCell.tsx
    │   │   ├── AudioCell.tsx
    │   │   ├── VideoCell.tsx
    │   │   ├── DocumentCell.tsx
    │   │   ├── MonetizedCell.tsx
    │   │   └── LinkCell.tsx
    │   ├── TableToolbar.tsx
    │   └── TablePagination.tsx
    ├── editor/
    │   └── WysiwygEditor.tsx      ← GitHub-style markdown
    └── admin/
        └── ...
```

---

## 4. THE SYNC FLOW IN DETAIL

### Step 1: User Enters Google Sheet URL

```typescript
// app/api/sheets/route.ts (POST)

async function createSheet(url: string) {
  // 1. Parse sheet ID from URL
  const sheetId = extractSheetId(url);
  // https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit#gid=0

  // 2. Fetch sheet data via Google Sheets API
  const sheetsApi = google.sheets({ version: 'v4', auth: oauthClient });
  const response = await sheetsApi.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'A:ZZ',  // Get all data
  });

  // 3. Parse headers (row 1) into column configs
  const headers = response.data.values[0];
  const rows = response.data.values.slice(1);

  // 4. Store in Supabase
  const { data: sheet } = await supabase.from('sheets').insert({
    title: sheetMetadata.properties.title,
    google_sheet_id: sheetId,
    google_sheet_url: url,
    slug: slugify(title),
    owner_id: user.id,
  }).select().single();

  // 5. Create column configs
  const columnConfigs = headers.map((header, i) => ({
    sheet_id: sheet.id,
    column_key: `col_${i}`,
    display_name: header,
    sort_order: i,
  }));
  await supabase.from('column_configs').insert(columnConfigs);

  // 6. Insert row data
  const rowData = rows.map((row, i) => ({
    sheet_id: sheet.id,
    row_index: i,
    data: Object.fromEntries(headers.map((_, j) => [`col_${j}`, row[j] || ''])),
    row_hash: hashRow(row),
  }));
  await supabase.from('sheet_data').insert(rowData);

  // 7. Install Apps Script trigger (optional, via Sheets API)
  await installAppsScriptTrigger(sheetId);

  return sheet;
}
```

### Step 2: Apps Script Auto-Installation

```javascript
// This gets added to each connected Google Sheet
// via the Google Apps Script API

function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;

  const payload = {
    sheetId: e.source.getId(),
    sheetName: sheet.getName(),
    row: range.getRow(),
    col: range.getColumn(),
    value: e.value,
    oldValue: e.oldValue,
    timestamp: new Date().toISOString(),
    userEmail: Session.getActiveUser().getEmail()
  };

  UrlFetchApp.fetch('https://yourapp.vercel.app/api/sync/inbound', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    headers: {
      'Authorization': 'Bearer YOUR_SYNC_SECRET'
    }
  });
}

// Also add a time-based trigger for batch sync
function scheduledSync() {
  const sheet = SpreadsheetApp.getActive();
  const data = sheet.getDataRange().getValues();

  UrlFetchApp.fetch('https://yourapp.vercel.app/api/sync/inbound', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      sheetId: sheet.getId(),
      fullSync: true,
      data: data,
      timestamp: new Date().toISOString()
    }),
    headers: {
      'Authorization': 'Bearer YOUR_SYNC_SECRET'
    }
  });
}
```

### Step 3: Outbound Sync (Supabase → Sheets)

```typescript
// app/api/sync/outbound/route.ts

export async function POST(req: Request) {
  const payload = await req.json();
  // Supabase webhook sends: {type, table, record, old_record}

  if (payload.table === 'sheet_data') {
    const { sheet_id, row_index, data } = payload.record;

    // Get sheet's Google ID
    const { data: sheet } = await supabase
      .from('sheets')
      .select('google_sheet_id')
      .eq('id', sheet_id)
      .single();

    // Batch queue (don't write immediately)
    await supabase.from('sync_queue').insert({
      sheet_id,
      google_sheet_id: sheet.google_sheet_id,
      row_index,
      data,
      created_at: new Date().toISOString()
    });

    // Process queue (debounced - check if pending batch)
    await processSyncQueue(sheet_id);
  }
}

async function processSyncQueue(sheetId: string) {
  // Debounce: wait 30 seconds, then batch all changes
  const BATCH_DELAY = 30_000;

  // Check if a batch is already pending
  const pending = await redis.get(`sync_batch:${sheetId}`);
  if (pending) return; // Already queued

  await redis.set(`sync_batch:${sheetId}`, '1', 'EX', 30);

  setTimeout(async () => {
    // Get all queued changes
    const { data: queue } = await supabase
      .from('sync_queue')
      .select('*')
      .eq('sheet_id', sheetId)
      .order('created_at');

    // Batch write to Google Sheets
    const sheetsApi = google.sheets({ version: 'v4', auth });
    await sheetsApi.spreadsheets.values.batchUpdate({
      spreadsheetId: googleSheetId,
      requestBody: {
        valueInputOption: 'RAW',
        data: queue.map(item => ({
          range: `A${item.row_index + 2}:ZZ${item.row_index + 2}`,
          values: [Object.values(item.data)]
        }))
      }
    });

    // Clear queue
    await supabase.from('sync_queue')
      .delete()
      .eq('sheet_id', sheetId);
  }, BATCH_DELAY);
}
```

---

## 5. MONETIZATION COLUMN ENGINE

```typescript
// app/api/monetize/shorten/route.ts

const PROVIDERS = {
  shrinkme: {
    endpoint: 'https://shrinkme.io/api',
    paramName: 'url',
    apiKeyParam: 'api',
    extractUrl: (res: any) => res.shortenedUrl,
  },
  ouo: {
    endpoint: 'https://ouo.io/api/v1/shorten',
    paramName: 'url',
    apiKeyParam: 'api_key',
    extractUrl: (res: any) => res.shortened_url,
  },
  exeio: {
    endpoint: 'https://exe.io/api',
    paramName: 'url',
    apiKeyParam: 'api',
    extractUrl: (res: any) => res.shortenedUrl,
  }
};

async function monetizeColumn(sheetId: string, columnKey: string) {
  // 1. Get all rows for this sheet
  const { data: rows } = await supabase
    .from('sheet_data')
    .select('row_index, data')
    .eq('sheet_id', sheetId);

  // 2. Get provider settings
  const { data: settings } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'monetization_api')
    .single();

  const provider = PROVIDERS[settings.value.provider];
  const apiKey = settings.value.api_key;

  // 3. Process each row's URL
  const shortened = await Promise.allSettled(
    rows.map(async (row) => {
      const originalUrl = row.data[columnKey];
      if (!originalUrl || !isValidUrl(originalUrl)) return null;

      // Check if already shortened
      const existing = await supabase
        .from('shortened_links')
        .select('shortened_url')
        .match({ sheet_id: sheetId, column_key: columnKey, row_index: row.row_index })
        .single();

      if (existing.data) return existing.data;

      // Shorten via API
      const res = await fetch(
        `${provider.endpoint}?${provider.apiKeyParam}=${apiKey}&${provider.paramName}=${encodeURIComponent(originalUrl)}`
      );
      const data = await res.json();
      const shortenedUrl = provider.extractUrl(data);

      // Store
      await supabase.from('shortened_links').upsert({
        sheet_id: sheetId,
        column_key: columnKey,
        row_index: row.row_index,
        original_url: originalUrl,
        shortened_url: shortenedUrl,
        provider: settings.value.provider,
      });

      return { row_index: row.row_index, shortenedUrl };
    })
  );

  // 4. Create/update the monetized column config
  const monetizedColumnKey = `${columnKey}_monetized`;
  await supabase.from('column_configs').upsert({
    sheet_id: sheetId,
    column_key: monetizedColumnKey,
    display_name: `${columnKey} (Link)`,
    is_monetized: true,
    display_type: 'link',
  });
}
```

---

## 6. TANTABLE CELL RENDERERS

```tsx
// components/table/cells/ImageCell.tsx
export function ImageCell({ value }: { value: string }) {
  const [expanded, setExpanded] = useState(false);

  if (!value || !isValidUrl(value)) return <span>{value}</span>;

  return (
    <>
      <img
        src={`/api/media/thumbnail?url=${encodeURIComponent(value)}&size=64`}
        alt=""
        className="w-16 h-16 object-cover rounded cursor-pointer
                   hover:ring-2 ring-blue-500 transition-all"
        onClick={() => setExpanded(true)}
        loading="lazy"
      />
      {expanded && (
        <Dialog open={expanded} onOpenChange={setExpanded}>
          <DialogContent>
            <img src={value} alt="" className="max-w-full max-h-[80vh]" />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

// components/table/cells/AudioCell.tsx
export function AudioCell({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-2">
      <audio controls preload="none" className="h-8 w-48">
        <source src={value} />
      </audio>
      <a href={value} download className="text-blue-500 hover:text-blue-700">
        <DownloadIcon className="w-4 h-4" />
      </a>
    </div>
  );
}

// components/table/cells/VideoCell.tsx
export function VideoCell({ value }: { value: string }) {
  const thumbnailUrl = useMemo(() => {
    // YouTube
    const ytMatch = value.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    if (ytMatch) return `https://img.youtube.com/vi/${ytMatch[1]}/mqdefault.jpg`;

    // Vimeo - would need API call
    return `/api/media/thumbnail?url=${encodeURIComponent(value)}&type=video`;
  }, [value]);

  return (
    <div className="relative group cursor-pointer w-24 h-16">
      <img src={thumbnailUrl} className="w-full h-full object-cover rounded" />
      <div className="absolute inset-0 flex items-center justify-center
                      bg-black/30 group-hover:bg-black/50 transition-all rounded">
        <PlayIcon className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}

// components/table/cells/DocumentCell.tsx
export function DocumentCell({ value }: { value: string }) {
  return (
    <a
      href={value}
      target="_blank"
      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
    >
      <iframe
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(value)}&embedded=true`}
        className="w-20 h-24 border rounded pointer-events-none"
        tabIndex={-1}
      />
      <FileTextIcon className="w-4 h-4" />
    </a>
  );
}

// components/table/cells/MonetizedCell.tsx
export function MonetizedCell({
  shortenedUrl,
  isUnlocked
}: {
  shortenedUrl: string;
  isUnlocked: boolean;
}) {
  if (!isUnlocked) {
    return (
      <div className="flex items-center gap-2 text-amber-600">
        <LockIcon className="w-4 h-4" />
        <span className="text-sm blur-sm select-none">hidden-content-url</span>
        <Button size="sm" variant="outline" onClick={() => {/* paywall logic */}}>
          Unlock
        </Button>
      </div>
    );
  }

  return (
    <a href={shortenedUrl} target="_blank" className="text-blue-600 underline">
      Access Resource →
    </a>
  );
}
```

---

## 7. DYNAMIC TANSTACK TABLE WITH CONFIG

```tsx
// components/table/DataTable.tsx

export function DataTable({
  sheet,
  columns: columnConfigs,
  data,
  canEdit,
}: DataTableProps) {
  const columns = useMemo(() =>
    columnConfigs
      .filter(col => col.is_visible)
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(col => ({
        accessorKey: col.column_key,
        header: col.display_name,
        enableSorting: col.is_sortable,
        enableColumnFilter: col.is_filterable,
        size: col.width ? parseInt(col.width) : undefined,

        cell: ({ getValue }) => {
          let value = getValue() as string;

          // Apply transformations
          if (col.prefix) value = col.prefix + value;
          if (col.suffix) value = value + col.suffix;
          if (col.find_replace?.length) {
            col.find_replace.forEach(({ find, replace }) => {
              value = value.replaceAll(find, replace);
            });
          }

          // Render by type
          switch (col.display_type) {
            case 'image': return <ImageCell value={value} />;
            case 'audio': return <AudioCell value={value} />;
            case 'video': return <VideoCell value={value} />;
            case 'document': return <DocumentCell value={value} />;
            case 'link':
              if (col.is_monetized) {
                return <MonetizedCell shortenedUrl={value} isUnlocked={false} />;
              }
              return <a href={value} target="_blank">{value}</a>;
            default: return <span>{value}</span>;
          }
        },

        // Inline editing
        ...(canEdit ? {
          cell: ({ getValue, row, column, table }) => (
            <EditableCell
              value={getValue()}
              onSave={(newValue) => {
                updateCell(sheet.id, row.index, column.id, newValue);
              }}
            />
          )
        } : {})
      })),
    [columnConfigs, canEdit]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    ...sheet.table_config,  // Admin-defined TanTable overrides
  });

  // Supabase Realtime subscription for live updates
  useEffect(() => {
    const channel = supabase
      .channel(`sheet-${sheet.id}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'sheet_data',
        filter: `sheet_id=eq.${sheet.id}`
      }, (payload) => {
        // Update local state with new data
        handleRealtimeUpdate(payload);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [sheet.id]);

  return (
    <div>
      <TableToolbar table={table} sheet={sheet} />
      <div className="rounded-md border">
        <Table>
          {/* ... standard TanStack Table render ... */}
        </Table>
      </div>
      <TablePagination table={table} />
    </div>
  );
}
```

---

## 8. WYSIWYG EDITOR (GitHub-style)

```tsx
// components/editor/WysiwygEditor.tsx
// Using @uiw/react-md-editor (free, GitHub-style)

import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

export function WysiwygEditor({
  value,
  onChange,
  label
}: {
  value: string;
  onChange: (val: string) => void;
  label: string;
}) {
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">{label}</label>
        <div className="flex rounded-md border">
          <button
            className={cn(
              "px-3 py-1 text-sm",
              mode === 'edit' && "bg-gray-100 font-medium"
            )}
            onClick={() => setMode('edit')}
          >
            <PencilIcon className="w-3 h-3 mr-1 inline" />
            Edit
          </button>
          <button
            className={cn(
              "px-3 py-1 text-sm",
              mode === 'preview' && "bg-gray-100 font-medium"
            )}
            onClick={() => setMode('preview')}
          >
            <EyeIcon className="w-3 h-3 mr-1 inline" />
            Preview
          </button>
        </div>
      </div>

      <MDEditor
        value={value}
        onChange={(val) => onChange(val || '')}
        preview={mode}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        textareaProps={{
          placeholder: 'Write content here... (Markdown supported)',
        }}
        height={300}
        data-color-mode="light"
      />
    </div>
  );
}
```

---

## 9. FREE TIER LIMITS & WORKAROUNDS

```
┌─────────────────────────────────────────────────────────────┐
│ SERVICE         │ FREE TIER LIMIT      │ WORKAROUND         │
├─────────────────┼──────────────────────┼────────────────────┤
│ Vercel          │ 100GB bandwidth      │ Cache aggressively │
│                 │ 100K function calls   │ Static where can   │
│                 │ 1 cron (daily only)  │ Use GitHub Actions │
├─────────────────┼──────────────────────┼────────────────────┤
│ Supabase        │ 500MB database       │ Compress JSONB     │
│                 │ 2GB bandwidth        │ Pagination         │
│                 │ 50K monthly active   │ Cache on client    │
│                 │ 500K edge fn calls   │                    │
├─────────────────┼──────────────────────┼────────────────────┤
│ Google Sheets   │ 300 req/min/project  │ Batch operations   │
│ API             │ 60 req/min/user      │ Queue + debounce   │
│                 │ No cost              │ Cache reads        │
├─────────────────┼──────────────────────┼────────────────────┤
│ GitHub Actions  │ 2000 min/month       │ 5-min cron = ~8.6K │
│                 │ (but cron is ~6/hour │ calls but only     │
│                 │  minimum actually)   │ ~720 min used      │
├─────────────────┼──────────────────────┼────────────────────┤
│ Shrink.me API   │ Free tier            │ Bulk batch at once │
│                 │ Rate limited         │ Cache results      │
├─────────────────┼──────────────────────┼────────────────────┤
│ Apps Script     │ 6 min execution      │ Keep payloads lean │
│ Triggers        │ 20 triggers/user     │ One per sheet      │
│                 │ 90 min/day total     │ Minimal processing │
└─────────────────┴──────────────────────┴────────────────────┘
```

### Critical Optimization: GitHub Actions Cron Reality

```
GitHub says "*/5 * * * *" but actually runs every ~15-20 min
in practice for free tier. This is FINE for near-real-time sync.

For truly instant sync: rely on Apps Script onEdit trigger
GitHub Actions cron = backup / catch missed changes
```

---

## 10. SECURITY CONSIDERATIONS

```typescript
// middleware.ts - Route protection

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  // Protect admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (profile?.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Protect sync endpoints
  if (req.nextUrl.pathname.startsWith('/api/sync')) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.SYNC_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return res;
}
```

---

## 11. ADDITIONAL IDEAS & FEATURES

### What You Haven't Thought Of Yet

```
1. EMBEDDABLE TABLES
   - Generate <iframe> embed code for each sheet/post
   - Allow external sites to embed your TanTables
   - Monetized columns still work in embeds
   - This alone could be a massive growth lever

2. API ACCESS
   - Each sheet gets an auto-generated REST API
   - GET /api/public/sheets/{slug}/data?page=1&limit=50
   - People use YOUR app as their database API
   - Like Sheety.co but free and self-hosted

3. GOOGLE SHEETS ADD-ON
   - Build a sidebar add-on for Google Sheets
   - One-click publish to your platform
   - See live sync status from within Sheets
   - Much better UX than pasting URLs

4. TEMPLATES MARKETPLACE
   - Pre-built sheet templates (inventory tracker,
     link directory, resource library, price comparison)
   - Users clone templates into their own sheets
   - You pre-configure column types, monetization

5. COMPARISON TABLE MODE
   - Auto-detect if sheet is a comparison table
   - Render as a beautiful comparison grid
   - Think G2.com or versus.com style
   - Massive SEO potential for affiliate revenue

6. CHANGELOG / VERSION HISTORY
   - Every sync creates a snapshot
   - "View changes since yesterday"
   - Rollback to any point
   - Free diff viewer like GitHub

7. COLLABORATIVE CURSORS
   - Show who's editing what cell in real-time
   - Using Supabase Presence (free tier supports this)
   - Like Google Sheets but on YOUR frontend

8. CSV/JSON EXPORT
   - Let visitors download filtered/sorted data
   - Another monetization gate: "Download full CSV" behind paywall

9. CHART GENERATION
   - Auto-detect numeric columns
   - Offer chart views (bar, line, pie) using recharts
   - Dashboard mode for data-heavy sheets

10. WEBHOOK NOTIFICATIONS
    - Notify sheet owner when data changes
    - Email digest: "5 rows changed today"
    - Discord/Slack webhook integration
```

---

## 12. VIABILITY ANALYSIS

### Market Fit

```
WHO WANTS THIS:
──────────────────────────────────────────
✅ Content creators who maintain resource lists
   (e.g., "Top 100 Free Design Tools")

✅ Affiliate marketers who maintain comparison tables
   (e.g., "Best VPNs 2025")

✅ Educators sharing curated resource libraries
   (e.g., "ML Papers to Read")

✅ Small businesses tracking inventory/pricing publicly

✅ Newsletter writers who maintain public databases
   (e.g., "Every AI Startup Funded This Year")

✅ Communities maintaining collaborative lists
   (e.g., "Remote Jobs Board")

COMPARABLE PRODUCTS & GAPS:
──────────────────────────────────────────
Sheety.co        → API only, no frontend     → YOU have frontend
Sheet2Site       → $29/mo, no editing        → YOU are free + editable
Actiondesk       → $300/mo enterprise        → YOU are free
Table2Site       → Limited, $10/mo           → YOU have more features
Rows.com         → Different focus           → YOU sync existing sheets
SpreadSimple     → $15/mo                    → YOU are free
Pory.io          → $25/mo                    → YOU are free

THE GAP: Nobody does free, open-source,
two-way sync with monetization features.
```

### Revenue Model (For the Template Creator)

```
1. TEMPLATE ITSELF:
   - Sell on Gumroad / GitHub Sponsors
   - $29-79 for the template
   - Recurring for updates

2. BUILT-IN MONETIZATION proves the concept:
   - Shrink.me / OUO earn money per click
   - Template users earn from THEIR content
   - You could take a referral cut from link shorteners

3. HOSTING SERVICE (Future):
   - "Don't want to self-host? We'll host for $5/mo"
   - One-click deploy to your infrastructure
   - Managed version

4. PREMIUM FEATURES (Template tiers):
   - Free: Basic sync, 3 sheets
   - Pro ($49): Unlimited sheets, monetization,
     custom domains, embeds
   - Agency ($149): Multi-user, white-label,
     API access
```

---

## 13. POTENTIAL LOOPHOLES & RISKS

```
⚠️  CRITICAL RISKS:
─────────────────────────────────────────

1. GOOGLE API OAUTH CONSENT SCREEN
   Problem: Google requires OAuth verification for
   sensitive scopes (sheets.edit). Unverified apps
   show scary warnings and are limited to 100 users.

   Fix: Use service account + share sheets with
   service account email. No OAuth consent needed.
   OR: Go through verification (2-4 weeks, free).

2. APPS SCRIPT TRIGGER RELIABILITY
   Problem: onEdit triggers can fail silently.
   Simple triggers can't make external HTTP calls.
   INSTALLABLE triggers can, but require authorization.

   Fix: Use installable triggers (not simple).
   GitHub Actions cron as safety net catches missed edits.
   Add a "Force Sync" button in admin panel.

3. VERCEL FUNCTION TIMEOUT (10s free tier)
   Problem: Full sheet sync with 10K rows will timeout.

   Fix: Paginate the sync. Process 500 rows per invocation.
   Chain function calls. Or use Supabase Edge Functions
   (150s timeout on free tier!).

4. SUPABASE 500MB LIMIT
   Problem: Large sheets eat storage fast.
   A sheet with 10K rows × 20 columns ≈ 5-10MB
   So ~50-100 sheets max.

   Fix: Compress JSONB data. Only store deltas.
   Archive old sync logs aggressively.
   Add a storage usage dashboard in admin.

5. LINK SHORTENER API LIMITS
   Problem: Shrink.me has undocumented rate limits.
   Bulk shortening 1000 links might get you blocked.

   Fix: Queue and rate-limit. Process 10 links per minute.
   Cache ALL shortened links (never re-shorten same URL).
   Offer multiple provider fallbacks.

6. RACE CONDITIONS IN BIDIRECTIONAL SYNC
   Problem: User A edits on Sheets while User B
   edits same cell on frontend. Both sync overwrites.

   Fix: Cell-level timestamps + conflict queue.
   Lock cells during active sync window.
   Show "conflict detected" UI to admin.

7. GOOGLE SHEETS API QUOTA
   Problem: 300 req/min per project sounds a lot
   but multiple users syncing simultaneously = trouble.

   Fix: Aggressive request batching.
   Read: batch get (1 request for entire sheet).
   Write: batch update (1 request for all changes).
   Never make per-cell API calls.

8. SEO CONSIDERATIONS
   Problem: Data tables are not great for SEO by default.
   JavaScript-rendered tables aren't crawlable.

   Fix: Server-side render the tables (Next.js SSR).
   Add JSON-LD structured data (Dataset schema).
   Generate static pages for published sheets.
   The WYSIWYG content above/below tables helps massively.
```

---

## 14. IMPLEMENTATION PRIORITY

```
PHASE 1 - MVP (Week 1-2)
═════════════════════════
□ Supabase schema setup
□ Google Sheets API integration (read-only first)
□ Basic admin: paste URL → import sheet → display table
□ TanStack Table rendering with basic column types
□ Supabase Auth (admin only)

PHASE 2 - TWO-WAY SYNC (Week 3-4)
══════════════════════════════════
□ Apps Script trigger installation
□ Inbound sync endpoint
□ Outbound sync with batching
□ GitHub Actions cron backup
□ Conflict detection
□ Frontend inline editing

PHASE 3 - CMS FEATURES (Week 5-6)
══════════════════════════════════
□ Categories (2-level)
□ WYSIWYG editor for content
□ Column configuration UI
□ Cell type renderers (image, audio, video, doc)
□ Permissions system
□ Sheet publishing workflow

PHASE 4 - MONETIZATION (Week 7-8)
══════════════════════════════════
□ Link shortener integration
□ Monetized column logic
□ Paywall UI
□ Click tracking

PHASE 5 - POLISH (Week 9-10)
════════════════════════════
□ Responsive design
□ SEO optimization
□ Embed feature
□ Export functionality
□ Settings panel
□ Documentation
```

---

## FINAL THOUGHT

This is a genuinely viable product. The **closest competitor is Sheet2Site at $29/month** and it only does one-way sync with no editing, no monetization, and no open-source option. You're building something that fills a real gap.

The **killer combo** is: free + two-way sync + monetization + self-hostable. That doesn't exist today.

The technical risk is manageable - the sync engine is the hardest part but the Apps Script + GitHub Actions + debounced batching approach handles it elegantly within free tier constraints.

**Want me to start building any specific part of this?**