# TERMUX ALIASES

1. Two approaches

Add one alias

echo "alias stat='busybox stat'" >> ~/.bashrc
source ~/.bashrc

Add multiple aliases

cat >> ~/.bashrc <<'EOF'
alias ls='busybox ls'
alias stat='busybox stat'
EOF
source ~/.bashrc

I prefer the second approach when adding several aliases.

---

2. CRUD for aliases

Think of it like this:

CRUD	Alias operation	Command

Create	Add alias	echo ... >> ~/.bashrc
Read	See aliases	alias / grep
Update	Change alias	sed
Delete	Remove alias	sed
Apply	Reload .bashrc	source ~/.bashrc

---

CREATE

Add:

alias stat='busybox stat'

to .bashrc:

echo "alias stat='busybox stat'" >> ~/.bashrc

Then activate it:

source ~/.bashrc


---

READ

See everything:

alias

See only your ls and stat aliases:

alias ls stat

Or inspect the actual .bashrc:

grep -nE '^alias (ls|stat)=' ~/.bashrc

And:

type ls
type stat

This tells you whether Bash is actually using an alias.


---

UPDATE

Suppose you currently have:

alias stat='busybox stat'

and want:

alias stat='busybox stat -c'

You can replace it with:

sed -i "s/^alias stat=.*/alias stat='busybox stat -c'/" ~/.bashrc
source ~/.bashrc

Verify:

type stat

Important

For aliases, "update" is usually just replace the corresponding line in .bashrc.


---

DELETE

Remove the stat alias:

sed -i "/^alias stat=/d" ~/.bashrc
source ~/.bashrc

Verify:

alias stat

You should get something like:

bash: alias: stat: not found

Then stat goes back to the normal executable.


---

3. Temporary vs permanent aliases

This distinction is important.

Temporary

alias stat='busybox stat'

Works only in the current shell session.

Close Termux and it's gone.

Permanent

echo "alias stat='busybox stat'" >> ~/.bashrc

It gets loaded every time Bash starts.


---

4. There is another CRUD layer: .bashrc itself

Since you're modifying:

~/.bashrc

you can CRUD the configuration file too.

Read

cat ~/.bashrc

or:

grep -n '^alias' ~/.bashrc

Add

cat >> ~/.bashrc <<'EOF'
alias ls='busybox ls'
alias stat='busybox stat'
EOF

Update

sed -i "s/^alias ls=.*/alias ls='busybox ls -la'/" ~/.bashrc

Delete

sed -i "/^alias ls=/d" ~/.bashrc

Reload

source ~/.bashrc


---

5. Other commands where this technique applies

Any command can technically be aliased.

For example:

alias ll='ls -lah'
alias la='ls -A'
alias ..='cd ..'
alias ...='cd ../..'
alias c='clear'
alias h='history'
alias grep='grep --color=auto'

And in your particular case, you could use BusyBox replacements:

alias ls='busybox ls'
alias stat='busybox stat'
alias cp='busybox cp'
alias mv='busybox mv'
alias rm='busybox rm'
alias mkdir='busybox mkdir'

But don't blindly replace all of them. Your GNU/Termux versions may have features that BusyBox versions don't.

Your current situation only establishes that:

ls   → BusyBox works
stat → BusyBox works

So I'd leave everything else alone unless you encounter the same error.


---

6. A more professional way to manage this

Instead of continuously appending things to .bashrc, you can create a dedicated aliases file:

mkdir -p ~/.config
touch ~/.config/aliases

Put your aliases there:

cat > ~/.config/aliases <<'EOF'
alias ls='busybox ls'
alias stat='busybox stat'
EOF

Then load it from .bashrc:

echo '[ -f ~/.config/aliases ] && source ~/.config/aliases' >> ~/.bashrc
source ~/.bashrc

Now you have:

~/.bashrc
    ↓
~/.config/aliases
    ↓
your aliases

That's cleaner once you start accumulating a lot of Termux customizations.

For your current setup, though, I'd keep it simple:

cat >> ~/.bashrc <<'EOF'
alias ls='busybox ls'
alias stat='busybox stat'
EOF
source ~/.bashrc

Then use:

grep -n '^alias' ~/.bashrc

to inspect what you've configured.