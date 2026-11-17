import re, zlib, sys

src = '/data/user/0/com.androidharness.app/files/.harness-scratch/jp.pdf'
out = '/data/user/0/com.androidharness.app/files/.harness-scratch/jp_body.txt'

data = open(src, 'rb').read()
streams = re.findall(rb'stream\r?\n(.*?)\r?\nendstream', data, re.DOTALL)
text = []
for s in streams:
    try:
        d = zlib.decompress(s)
    except Exception:
        d = s
    for m in re.finditer(rb'\((.*?)\)\s*Tj', d):
        text.append(m.group(1).decode('latin1'))
    for m in re.finditer(rb'\[(.*?)\]\s*TJ', d, re.DOTALL):
        parts = re.findall(rb'\((.*?)\)', m.group(1))
        text.append(''.join(p.decode('latin1') for p in parts))

open(out, 'w').write('\n'.join(text))
print('chunks', len(text))
