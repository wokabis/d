A reusable function means you take a sequence of commands that you repeat often, give it a name, and turn it into a mini-tool.

Instead of writing this every time:

GH_PAT="TOKEN" 
GITHUB_USER="komputeks"
NEW_REPO_NAME="project1"

curl ...
git init
git add .
git commit
git remote add origin ...
git push

you create a function once:

create_repo() {
  GH_PAT="$1"
  GITHUB_USER="$2"
  NEW_REPO_NAME="$3"

  mkdir -p "$NEW_REPO_NAME" &&
  cd "$NEW_REPO_NAME" &&
  curl -s \
    -X POST \
    -H "Authorization: Bearer $GH_PAT" \
    -H "Accept: application/vnd.github+json" \
    https://api.github.com/user/repos \
    -d "{\"name\":\"$NEW_REPO_NAME\",\"private\":true}" &&
  touch README.md &&
  git init &&
  git add . &&
  git commit -m "first commit" &&
  git branch -M main &&
  git remote add origin "https://github.com/$GITHUB_USER/$NEW_REPO_NAME.git" &&
  git push -u origin main
}

Now the function exists in your current shell session.

You can call it like this:

create_repo "YOUR_TOKEN" "komputeks" "my-new-project"

The arguments map like this:

$1 = YOUR_TOKEN
$2 = komputeks
$3 = my-new-project

So internally:

GH_PAT="$1"

becomes:

GH_PAT="YOUR_TOKEN"

and:

NEW_REPO_NAME="$3"

becomes:

NEW_REPO_NAME="my-new-project"


---

Why professionals use this pattern

Because the logic is separated from the data.

The logic:

create GitHub repo
initialize git
commit
push

stays the same.

The data changes:

token
username
repository name
visibility
branch

So instead of making 100 custom commands, you have:

create_repo TOKEN USER NAME


---

Making it permanent

If you only need it once:

create_repo ...

is enough.

If you want it available every time you open Termux:

Edit:

~/.bashrc

Add the function there:

cat >> ~/.bashrc <<'EOF'

create_repo() {
  GH_PAT="$1"
  GITHUB_USER="$2"
  NEW_REPO_NAME="$3"

  mkdir -p "$NEW_REPO_NAME" &&
  cd "$NEW_REPO_NAME" &&
  echo "Creating $NEW_REPO_NAME..."
}

EOF

Reload:

source ~/.bashrc

Now every Termux session knows:

create_repo


---

The next professional evolution

A senior developer would usually not store the token in the command:

Bad:

create_repo "ghp_xxxxxxxxx" komputeks app1

because your shell history saves it.

Better:

export GH_PAT="ghp_xxxxxxxxx"
create_repo komputeks app1

or even better:

read -s GH_PAT
export GH_PAT

The reusable function then becomes a small CLI tool.

Your ghenv project is basically this same idea taken further: turning repeated GitHub automation into a reliable command.