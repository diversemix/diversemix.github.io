---
title: "DrevoCalibur V2 TE Keyboard"
last_modified_at: 2022-11-25T18:07:00+00:00
categories:
  - Technical
tags:
  - hardware
  - setup
---

TODO :warning: I need to just confirm all this when I next have the keyboard to hand, as I'm currently on my laptop.

I love this little mechanical keyboard as its very small and portable, but alas it does have one or two idiosyncrasies with Linux and my use case.
The most noticeable is the incompatible use of the back-tick key "`" and  the function keys at the same time. In the most part I try and avoid using the function keys to get around this.

Run the following command so function keys are by default:

```
echo 0 | pkexec tee /sys/module/hid_apple/parameters/fnmode
```

