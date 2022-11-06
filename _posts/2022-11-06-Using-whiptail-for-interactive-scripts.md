---
title: "Using whiptail for interactive scripts"
last_modified_at: 2022-11-06T11:07:08+00:00
categories:
  - blank
tags:
  - snippet
  - opinion
  - learning
  - personal
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
