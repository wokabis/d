
Create a single protected GitHub config file like this:

cat > ~/.github_config <<'EOF'
GITHUB_USER=komputeks
GITHUB_USER_EMAIL=bla@example.com
GH_PAT=your_token_here
EOF

chmod 600 ~/.github_config

Then create a loader function:

load_github_config() {

    if [ -r ~/.github_config ]; then
        source ~/.github_config
    fi


    if [ -z "$GITHUB_USER" ]; then
        read -p "GitHub username: " GITHUB_USER
        export GITHUB_USER
    fi


    if [ -z "$GITHUB_USER_EMAIL" ]; then
        read -p "GitHub email: " GITHUB_USER_EMAIL
        export GITHUB_USER_EMAIL
    fi


    if [ -z "$GH_PAT" ]; then
        read -s -p "GitHub PAT: " GH_PAT
        echo
        export GH_PAT
    fi


    if [ -z "$NEW_REPO_NAME" ]; then
        read -p "Repository name: " NEW_REPO_NAME
        export NEW_REPO_NAME
    fi
}

Use it:

load_github_config

Now:

echo "$GITHUB_USER"
echo "$GITHUB_USER_EMAIL"
echo "$NEW_REPO_NAME"

will show the loaded values.

A more secure improvement: do not keep GH_PAT in the same file as normal config. A professional layout would be:

~/.github_config       # username, email, preferences
~/.github_token        # token only

with:

chmod 600 ~/.github_config ~/.github_token

That way your token has its own protected storage and can be rotated independently.







The difference is scope.

1. Without export

GH_PAT="ghp_xxxxxxxxx"
create_repo komputeks app1

This creates a shell variable.

It exists only inside your current Bash shell:

echo "$GH_PAT"

works.

But if a command launches another process, that process does not see it.

Example:

GH_PAT="secret"
bash -c 'echo $GH_PAT'

Output:

(empty)

because bash -c is a child process and the variable was not exported.


---

2. With export

export GH_PAT="ghp_xxxxxxxxx"
create_repo komputeks app1

This creates an environment variable.

It is inherited by child processes:

export GH_PAT="secret"
bash -c 'echo $GH_PAT'

Output:

secret


---

Why this matters for your GitHub automation

Your function:

create_repo() {
  curl \
  -H "Authorization: Bearer $GH_PAT"
}

is running in your current shell, so this works:

GH_PAT="secret"
create_repo komputeks app1

because the function can access shell variables.

But if your function calls external programs:

curl
git
bash
python

and those programs need the token, export is the correct professional pattern.

Example:

export GH_PAT="secret"

curl \
-H "Authorization: Bearer $GH_PAT" \
https://api.github.com/user


---

Another important difference: lifetime

Both disappear when you close Termux.

This:

export GH_PAT="secret"

only lasts for that terminal session.

To make it permanent you would put it in:

~/.bashrc

but do not put tokens there unless you understand the security tradeoff. Anyone who can read your .bashrc gets your GitHub access.

A more professional Termux pattern:

export GH_PAT="$(cat ~/.github_token)"

where:

chmod 600 ~/.github_token

protects the file.


---

For your use case (one-off repo creation), the cleanest pattern is probably:

GH_PAT="TOKEN" create_repo komputeks app1

with the function reading it:

create_repo() {
    echo "$GH_PAT"
}

because the token only exists for that command execution. This reduces accidental leakage into your shell session.