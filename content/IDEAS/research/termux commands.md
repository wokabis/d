

## 1. create a file (or folder) for every name listed in a text file

```
while IFS= read -r name || [ -n "$name" ]; do [ -n "$name" ] && touch -- "$name.txt"; done < /sdcard/Download/names.txt
```

> What it does:  
``` while IFS= read -r name ``` — reads each line from the text file.  
``` [ -n "$name" ] ```  — skips empty lines.  
``` touch -- "$name.txt" ``` (mkdir for folders) — creates a file using the name on that line.  
``` done < names.txt ``` — reads the list from names.txt.





## 2. In current directory, Create files using available folder names and put them in a new folder

```
mkdir -p output && find . -mindepth 1 -maxdepth 1 -type d ! -name output -exec sh -c 'touch "output/$(basename "$1").md"' _ {} \;
```

## 3. copy all files inside current folder into top level folders inside that current folder 


``` 
find . -mindepth 1 -maxdepth 1 -type d -exec sh -c 'cp -t "$1" ./* 2>/dev/null' _ {} \;
```

## 4. Create a new repository on the command line

```
LET'S BRAINSTORM FIRST!

- Rename Ghenv to ghtool
- Rewrite ghtool in Go to be cross-platform, with each platform having is own binary in releases i.e windows, linux, android (I don't know if arm64, armv7, armv8, arm64, I just want to support the versions that Termux, PowerShell, Command prompt, basically anywhere that CLI supports)
- auto adding of home bin path, showing help and version after successful installation
- add update command

- I'm thinking you should add a ghtool comand that will create/clone/update/delete a user's GitHub repo in a user's GitHub and upload/download the current local folder there, with one command.

How can we integrate these features?
- Check if gh is installed and logged in, and get user details from it, otherwise fallback to these if they have been saved and if not ask user to input them and save them.
- username
- useremail
- password (PAT)
- support for org
- If repoName exists, fail and ask user if they want to continue with repoName-1, repoName-2, etc
- Before uploading, show actions with y/n, like "this will upload $CURRENT_FOLDER to a new $NEW_REPO_NAME repository. After successful upload, show the repo URL to user like "$CURRENT_FOLDER successfully uploaded to new GitHub repo https://github.com:$GITHUB_USER/$NEW_REPO_NAME

locally user might save these,
NEW_REPO_NAME="repoName"
GITHUB_USER= "komputeks"
GITHUB_USER_EMAIL: bla
GITHUB_PAT: bla bla
REPOS_FOLDER="/sdcard/DJ X-PAT 254/Docs/my work/repos"


GH_PAT="BLABLA" && NEW_REPO_NAME="repoName" && CURRENT_FOLDER="$(pwd)" && GITHUB_USER="komputeks" && mkdir $NEW_REPO_NAME && mv "$(pwd)"/$NEW_REPO_NAME "$REPOS_FOLDER" && cd "$REPOS_FOLDER/$NEW_REPO_NAME" && curl -u $GITHUB_USER https://api.github.com/user/repos -d '{ "name": "$NEW_REPO_NAME", "private": true, "has_projects": false }' && touch README.md && git init && git config --global --add safe.directory "$(pwd)" && git add . && git commit -m "first commit" && git remote add origin git@github.com:$GITHUB_USER/$NEW_REPO_NAME.git && git branch -M main && git push -u origin main
```

git config --global --add safe.directory '/storage/emulated/0/DJ X-PAT 254/Docs/my work/repos/reponosis'


## Fix 1 — quickest workaround to "Function not implemented" when you run ls command
For normal Termux work, use BusyBox's ls:
Make an alias:
```
echo "alias ls='busybox ls'" >> ~/.bashrc
source ~/.bashrc
```
Then ls will use BusyBox.
Bu that may not be a permanent fix yet. Fix the underlying problem, if it exists.

## Current Directory

Store the current path in a variable:
```
CURRENT_DIR="$(pwd)"
echo "$CURRENT_DIR"
```
Use it directly in another command:
```
ls "$(pwd)"
```
See the current directory plus its contents:
```
pwd && ls
```

## 
