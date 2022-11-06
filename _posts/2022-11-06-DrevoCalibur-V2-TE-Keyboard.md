---
title: "DrevoCalibur V2 TE Keyboard"
last_modified_at: 2022-11-06T18:07:00+00:00
categories:
  - Technical
tags:
  - hardware
  - setup
---

Run the following command so function keys are by default:

```
echo 0 | pkexec tee /sys/module/hid_apple/parameters/fnmode
```

