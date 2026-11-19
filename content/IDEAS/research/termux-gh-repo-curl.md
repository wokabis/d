Yes. Your create_repo() is basically C in CRUD:

C — Create repository ✅

R — Read repository information

U — Update repository settings/files

D — Delete repository


For a reusable GitHub automation library, I would split them:

~/.bash_functions/
├── github_create.sh
├── github_read.sh
├── github_update.sh
└── github_delete.sh

Then load all:

for file in ~/.bash_functions/*.sh; do
    source "$file"
done


---

CREATE

Your function is close, but I would remove the duplicate push:

You currently have:

git push --set-upstream origin main
git push -u origin main

They do the same thing. Keep only:

git push -u origin main

Also, avoid putting PAT in the remote URL:

https://$GH_PAT@github.com/

because it gets saved in .git/config.

Better:

git remote add origin "https://github.com/$GH_USER/$NEW_REPO_NAME.git"

Then Git credential manager or gh auth handles authentication.


---

READ operations

1. List all repos

github_read.sh

list_repos() {
    curl -s \
    -H "Authorization: Bearer $GH_PAT" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/user/repos?per_page=100" |
    grep '"name":'
}

Usage:

list_repos


---

2. Get one repo

get_repo() {
    curl -s \
    -H "Authorization: Bearer $GH_PAT" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/$GH_USER/$1"
}

Usage:

get_repo ghenv


---

3. Check if repo exists

repo_exists() {

    curl -s \
    -o /dev/null \
    -w "%{http_code}" \
    -H "Authorization: Bearer $GH_PAT" \
    "https://api.github.com/repos/$GH_USER/$1"

}

Example:

repo_exists ghenv

Returns:

200

or

404


---

UPDATE operations

Rename repository

rename_repo() {

OLD="$1"
NEW="$2"

curl -X PATCH \
-H "Authorization: Bearer $GH_PAT" \
-H "Accept: application/vnd.github+json" \
"https://api.github.com/repos/$GH_USER/$OLD" \
-d "{\"name\":\"$NEW\"}"

}

Usage:

rename_repo oldname newname


---

Change visibility

Private:

make_private() {

curl -X PATCH \
-H "Authorization: Bearer $GH_PAT" \
-H "Accept: application/vnd.github+json" \
"https://api.github.com/repos/$GH_USER/$1" \
-d '{"private":true}'

}

Public:

make_public() {

curl -X PATCH \
-H "Authorization: Bearer $GH_PAT" \
-H "Accept: application/vnd.github+json" \
"https://api.github.com/repos/$GH_USER/$1" \
-d '{"private":false}'

}


---

Update description

update_description() {

curl -X PATCH \
-H "Authorization: Bearer $GH_PAT" \
-H "Accept: application/vnd.github+json" \
"https://api.github.com/repos/$GH_USER/$1" \
-d "{\"description\":\"$2\"}"

}

Usage:

update_description ghenv "GitHub environment manager"


---

DELETE operation

Delete repository

⚠️ Permanent.

delete_repo() {

curl -X DELETE \
-H "Authorization: Bearer $GH_PAT" \
-H "Accept: application/vnd.github+json" \
"https://api.github.com/repos/$GH_USER/$1"

}

Usage:

delete_repo testrepo


---

The professional structure

For your Termux automation, I would make a mini GitHub CLI:

ghkit/

├── github_config
│
├── functions/
│   ├── repo_create.sh
│   ├── repo_read.sh
│   ├── repo_update.sh
│   ├── repo_delete.sh
│   ├── secrets.sh
│   └── variables.sh
│
└── ghkit

Then commands become:

ghkit repo create app1
ghkit repo list
ghkit repo info ghenv
ghkit repo rename old new
ghkit repo delete test

You are basically recreating a lightweight version of gh CLI using Bash + GitHub REST API.

For your ghenv project, this architecture actually fits well because later you can add:

ghkit secret push
ghkit variable push
ghkit environment create
ghkit release create
ghkit workflow run

and have your own Termux DevOps toolkit.