---
title: "My Ubuntu Setup - getting up and running"
last_modified_at: 2022-11-14T14:45:01+00:00
categories:
  - Technical
tags:
  - setup
  - cheatsheet
---

This is a list of tasks that I need to do when setting up a new computer with Ubuntu, note that some of the setup is also useful for other distros.

## My Setup

I do have a script and a [git repo of `dotfiles`](https://github.com/diversemix/dotfiles),
but I this is difficult to maintain. 
New versions and methods of installations come out and I have several computers set up differently, 
so having one automated script is not achievable and I have found this page a better way to maintain and ease setup.

## Ubuntu

Although I started my career with over 12 flavours of unix, and more recently I've used
CentOS, Arch, Debian... I've settled on Ubuntu for simplicity and for ease of compatibility.

Most of my machines run the latest LTS version.
I did recently install a non-LTS version (Ubuntu 22.10) on my laptop and it failed to boot, after an hour or so of wrangling I needed to reinstall the windowing system with `sudo apt install gnome-panel gnome-settings-daemon`

> NOTE: If ever owning a chromebook, with [crouton](https://github.com/dnschneid/crouton) 
using [these instructions](https://ubuntu.com/tutorials/install-ubuntu-on-chromebook#1-overview)


### Little Tweaks

Use the SSO prompt you are presented with and sign in to:

- Ubuntu One
- Microsoft
- Google

Stuff that if not done will annoy you:

- Open Firefox and login to get Bookmarks
- Open Settings and set mouse to natural scroll
- Run `sudo apt-get install gnome-tweaks -y && gnome-tweaks`
- Then go to "Keyboard and mouse" -> Additional Layout -> Caps Lock -> Make Caps an addtional Esc

### Essentials

The following sections setup git does assume you have pulled by `dotfile` with:

```
# Add user to sudoers without password
echo "peter ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/peter

# Bare essentials
sudo apt install -y \
build-essential net-tools nodejs npm vim-athena git

# Generate a private key
ssh-keygen -t ed25519 -C "your_email@example.com"
cat cat ~/.ssh/id_ed25519.pub
```

:exclamation: Now you can browse to [your github settings](https://github.com/settings/keys) and add the key in there.

### Scripts setup 

```
# Clone dotfiles
cd ~
git config --global user.name "diversemix"
git config --global user.email diversemix@gmail.com
git config --global diff.tool meld
git config --global difftool.prompt false

git clone git@github.com:diversemix/dotfiles.git
```

Once the `dotfiles` repo has been pulled, update your `PATH` in your `~/.bashrc` file, by adding:

```bash
# Add my scripts to path
export PATH=$PATH:$HOME/dotfiles/scripts
```

### Dropbox

Next is dropbox, as this contains notes (private) and posts (public). 
The scripts from the `dotfiles/scripts` folder rely on Dropbox being setup and are used to edit and search [notes](https://github.com/diversemix/dotfiles/blob/main/scripts/notes.sh) and [posts](https://github.com/diversemix/dotfiles/blob/main/scripts/posts.sh). 

Go to the [dropbox install page](https://www.dropbox.com/install) and install from the first
link 
[using the  deb file](https://www.dropbox.com/download?dl=packages/ubuntu/dropbox_2020.03.04_amd64.deb)

Ensure that the `notes.sh` and `posts.sh` scripts are working.


### Notes & Posts

See previous "Dropbox" section to install dropbox as this is used to sync the current state of the notes and posts across all machines. 

Go to `Settings` -> `Keyboard` -> `View and Customize Shortcuts` 

Then in "Customize" setup up Super+N for `notes.sh` and Super+T for `posts.sh`

![Shortcuts](/assets/images/shortcuts.png)

### Install AppImage Launcher

Applications like Joplin and Bitwarden are distributed via a `.AppImage` file. 
Once these are downloaded they should be marked as executable and moved into your `~/Applications` folder.
In order to launch them like any other app you will need to have the AppImage launcher installed:

```
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt update
sudo apt install appimagelauncher alacarte
```

### Essential Apps

Useful apps I like to have installed:

```bash
# Useful
sudo apt install -y \
ack \
bat \
diodon \
figlet \
fzf \
gimp \
imagemagick \
jq \
keepassx \
lolcat \
make \
meld \
nodejs \
npm \
openssh-client \
openssl \
postgresql-client-common  \
postgresql-client \
ranger \
silversearcher-ag \
tcpdump \
tmux \
w3m \
w3m-img \
youtube-dl
```

### Alternative Windowing Systems

```
sudo apt install -y xubuntu-desktop xfce4
sudo apt install -y i3 zathura
```

### Bash Aliases

- Link with `ln -s ${HOME}/dotfiles/diversemix_aliases ~/.bash_aliases`

(If you already have this file you can source `diversemix_aliases` at the end)

### Bash Environment

There are 2 steps:

1) Edit `.bashrc` and add `source ~/dotfiles/diversemix_profile`, you may wish to follow the pattern below 
so that you don't have issues in non-interactive shells.

```
case "$-" in
  *i*) source ~/dotfiles/diversemix_profile ;;
  *)   echo This shell is not interactive ;;
esac

```

### Configure ranger 

PDF previews by uncommenting the `application/pdf`section, after:

```
ranger --copy-config=scope
vim ~/.config/ranger/scope.sh
```

Image previews with
```
pip3 install  ueberzug
set preview_images true >> ~/.config/ranger/rc.conf
set preview_images_method  ueberzug >> ~/.config/ranger/rc.conf
```

### ViM Environment

First install `vim-plug`

```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
Link the rc file with: `ln -s ${HOME}/dotfiles/diversemix.vimrc ~/.vimrc`

Don't forget to now run `:PlugInstall` from within `vim`

* TODO - installing `coc` and `coc-explorer`

### TMux Environment

Link the conf file with: `ln -s ${HOME}/dotfiles/diversemix.tmux.conf ~/.tmux.conf`

### Using font Source Code Pro

Install the patched fonts by cloning repo and running the install:
```
git clone git@github.com:powerline/fonts.git
cd fonts
./install.sh
```

Now go to Terminal -> Preferences and change the font to `Source Code Pro for Powerline`

### Installing bat

Easiest way of setting this up is to ensure bat is on the `PATH` by symlinking the binary into your local bin folder, thus:

```
  mkdir -p ~/.local/bin
  ln -s /usr/bin/batcat ~/.local/bin/bat
```

### Setting up FZF

Documentation can be [found here](https://github.com/junegunn/fzf)

Setup I use in my .bashrc:

```
export FZF_CTRL_T_COMMAND='ag -l'
export FZF_CTRL_T_OPTS='--border --info=inline --preview "bat --style=numbers --color=always --line-range :500 {}"  --bind shift-up:preview-page-up,shift-down:preview-page-down'

alias v='vim `fzf --preview "bat --color=always {}"`'
```

### Webcam

```
sudo apt install guvcview
```
