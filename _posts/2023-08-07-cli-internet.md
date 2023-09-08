---
title: "How I use the internet from bash"
last_modified_at: 2022-03-09T16:20:02-05:00
tags:
  - bash
  - cli
---

Often times I don't want to reach for the mouse and switch context, so I do use `w3m` a bit for browsing.  Here is a function that I load in my shell that allows me to search, often times the output is quite verbose, but still it stops me reaching for that mouse. 

```
how2() {
    file=$(mktemp)
    echo "$@" > ${file}
    term=$(python3 -c "import urllib.parse; print(urllib.parse.quote(input()))" < ${file})
    w3m -dump https://lite.duckduckgo.com/lite/?q="\\${term}"|more
}
```

Usage:

```
how2 open a csv file in python
```
