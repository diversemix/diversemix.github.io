---
title: "Using whiptail for interactive scripts"
last_modified_at: 2022-11-06T11:07:08+00:00
categories:
  - Technical
tags:
  - bash
  - UI
---

Here is a little example from the script I use for creating my posts. 

```
TITLE=$(whiptail --inputbox "Enter the post's title:" 10 60 3>&1 1>&2 2>&3)
```

There are many more dialog types that can be used:

 - msgbox
 - yesno
 - infobox
 - inputbox
 - passwordbox
 - textbox
 - menu 
 - checklist
 - radiolist
 - gauge 

The last one here is `gauge` which can be tricky to get working, thankfully
there is a good [StackOverflow post here](https://askubuntu.com/a/1137631), 
which suggests this code:

```bash
for i in {1..100}; do
   sleep 0.1
   export TERM=linux
   echo $i | whiptail --gauge "Doing something" 10 50 $i
done
```