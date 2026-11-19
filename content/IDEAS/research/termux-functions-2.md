Create a single protected GitHub config file like this:

```
cat > ~/.github_config <<'EOF'
export GH_USER="komputeks"
export GH_PAT=YOUR_VALUE_HERE
export REPOS_FOLDER="/storage/emulated/0/DJ X-PAT 254/Docs/my work/repos"
EOF

chmod 600 ~/.github_config
```

Then create a loader function:

```
mkdir -p ~/.bash_functions

cat > ~/.bash_functions/load_github_config.sh <<'EOF'
load_github_config() {

    if [ -r ~/.github_config ]; then
        source ~/.github_config
    fi


    if [ -z "$GH_USER" ]; then
        read -p "GitHub username: " GH_USER
        export GH_USER
    fi


    if [ -z "$GH_PAT" ]; then
        read -s -p "GitHub PAT: " GH_PAT
        echo
        export GH_PAT
    fi


    if [ -z "$REPOS_FOLDER" ]; then
        read -p "Repository name: " REPOS_FOLDER
        export REPOS_FOLDER
    fi


    if [ -z "$NEW_REPO_NAME" ]; then
        read -p "Repository name: " NEW_REPO_NAME
    fi
}
EOF
```

Use it:

load_github_config

Now:

echo "$GITHUB_USER"
echo "$GITHUB_USER_EMAIL"
echo "$NEW_REPO_NAME"



```
mkdir -p ~/.bash_functions

cat > ~/.bash_functions/create_repo.sh <<'EOF'
create_repo() {
    mkdir -p "$REPOS_FOLDER/$NEW_REPO_NAME"

    cd "$REPOS_FOLDER/$NEW_REPO_NAME" || exit

    curl -s \
        -X POST \
        -H "Authorization: Bearer $GH_PAT" \
        -H "Accept: application/vnd.github+json" \
        https://api.github.com/user/repos \
        -d "{\"name\":\"$NEW_REPO_NAME\",\"private\":true, \"has_projects\": false}"

    touch README.md

    git init
    git config --global --add safe.directory "$(pwd)"
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin "https://$GH_PAT@github.com/$GH_USER/$NEW_REPO_NAME.git"
    git push --set-upstream origin main
    git push -u origin main
}
EOF
```


FINAL COMMAND 
```
load_github_config && create_repo
```







you create a function once:

```
create_repo() {
  GH_PAT=YOUR_VALUE_HERE
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
```

Now the function exists in your current shell session.

You can call it like this:

```
create_repo "YOUR_TOKEN" "komputeks" "my-new-project"
```

The arguments map like this:

```
$1 = YOUR_TOKEN
$2 = komputeks
$3 = my-new-project
```
So internally:

GH_PAT=YOUR_VALUE_HERE

becomes:

GH_PAT=YOUR_VALUE_HERE

and:

NEW_REPO_NAME="$3"

becomes:

NEW_REPO_NAME="my-new-project"