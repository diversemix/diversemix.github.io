---
title: "Home"
layout: single
author_profile: true
---

> "Our own character and abilities are a direct reflection of the diversity of people we embrace."

This simple page is the entire site, condensing a taste of what I've done, why I've done it and how I do it.
The focus here is on technology, but I do talk about teams and processes too the later sections.
I've tried to keep this page easy to navigate with just these 4 sections:

 - :memo: [Software](/#memo-software)
 - :computer: [Hardware and Operating Systems](/#computer-hardware-and-operating-systems)
 - :star: [Work Philosophy](/#star-work-philosophy)
 - :package: [Projects](/#package-projects)

Questions welcome contact via github or email (see [github.com/diversemix](https://github.com/diversemix)).

<div class="fancy-divider"></div>

Before moving on here is a brief summary of my coding skills:

 - From 2022 onwards primarily working with Python (Django, FastAPI) and JavaScript/TypeScript (React). 
With experience in DevOps using pulumi and terraform in an AWS or Azure environment, managing docker CI/CD pipelines, with some k8s.

 - Prior to this worked extensively with Node.js (Express, Nestjs and Next.js), C/C++, .NET (C#) and Java (Spring Boot) / Kotlin

 - Other skills include Lua (Neovim plugin development), Bash scripting, SQL, HTML/CSS

<div class="fancy-divider-long"></div>

## :memo: Software

This section outlines the tools I use day to day categorised by function.
My choice of tooling has been influenced largely by my past experiences, especially starting out developing software across 10s of different *nix systems in the 90s.
I've tailored my toolset to suit my working style, the type of work I do and to support my own areas for improvement.

Before I start the sections here are my main motivations for the choices I made:
 - **Simplicity**: Reducing the friction of the HCI (Human Computer Interaction) to allow me to, as transparently as possible, focus on the task at hand.
 - **Privacy**: I avoid cloud based tools where possible, preferring local applications that store data on my own hardware.
 - **Portability**: I want to be able to work on different systems with minimal setup.
 - **Efficiency**: I choose tools that help me be productive and efficient in my work. Which is why I choose tools that follow standard shortcuts, like vi keybindings.
 - **Flexibility**: I prefer tools that can be customised to suit my workflow and preferences. These configurations are stored in my own `dotfile` repository.

<div class="fancy-divider"></div>

### Management Tools

As a visual and spacial thinker I make great use of the following tools:

 - [**Excalidraw**](https://excalidraw.com/) / [**tldraw**](https://www.tldraw.com/) - This tool is used to map out my thoughts visually, as they are often not linear. 
These also work offline in the browser and can edit local files which is ideal for confidentiality concerns.

 - [**Freeplane**](https://github.com/freeplane/freeplane) - For more structured thoughts or when document needs crafting I will turn to this mind mapping tool.
Again it stores data locally so no confidentiality issues, this is important as I use it to generate documents because of a great feature which allows notes to be added on nodes.
I used to use XMind, which had a heavy influence on Freeplane, but XMind went cloud based and so I have concerns about data privacy.

<div class="fancy-divider"></div>

### Development Tools

For development I am primarily a terminal user, so TUIs are my thing.

 - [My kickstart.nvim](https://github.com/diversemix/kickstart.nvim) - My [Neovim](https://neovim.io/) configuration, I use this as my main code editor in the terminal.

 - [Visual Studio Code](https://code.visualstudio.com/) - I use this mainly as its ubiquitous across many of the teams I have worked with. 
Sometimes forgoing my terminal based tools for the sake of collaboration.

 - [Git](https://git-scm.com/) - Version control is essential for any development work, I use git for all my projects.
I also use it for local files too as a way to be able to view history and changes over time.
For example my own personal notes are synchronised across my machines at home (using [Syncthing](https://syncthing.net/)) and each machine has its own local git repository for its own change control.

<div class="fancy-divider"></div>

### General Tools

These are a list of tools I used day to day at work or home, ordered by frequency of use (most frequent first):

- [zsh](https://www.zsh.org/) - My shell of choice, I'm a recent convert from bash but I prefer it now for its portability and features.
- [kitty](https://sw.kovidgoyal.net/kitty/) - My terminal emulator of choice, it is fast, feature rich and highly customisable.
- [Firefox](https://www.mozilla.org/en-US/firefox/new/) - My main web browser, I value its privacy features and customisability.
- [Bitwarden](https://bitwarden.com/) - My password manager of choice, it is open source and has strong security features.
- [diversemixnotes](diversemixnotes.readthedocs.io) - My personal note taking tooling for neovim and terminal use.
- [zoxide](https://github.com/ajeetdsouza/zoxide) - A smarter `cd` command, I use this to quickly navigate my filesystem based on my usage patterns.
- [yazi](https://yazi-rs.github.io/) - I used `ranger` in the past for navigating the filesystem in the terminal, but have recently switched to `yazi` which has a more modern codebase and is actively maintained. Its also _"bazingly fast"_ (there I've said it as its written in Rust).
- [git-delta](https://github.com/dandavison/delta) - A syntax highlighting pager for git and diff output, makes reading diffs much easier.

The following list are other terminal tools I use frequently:

 - [sd](https://github.com/chmln/sd) - A super fast alternative to `sed` for find and replace operations.
 - [ripgrep](https://github.com/BurntSushi/ripgrep) - I'm a recent convert from the venerable `ag` (the silver searcher) to `rg` (ripgrep) for searching through codebases.
 - [fzf](https://github.com/junegunn/fzf) - A command line fuzzy finder, I use this extensively in my neovim setup as well as in the terminal for finding files and commands.
 - [entr](https://github.com/eradman/entr) - A simple tool for running arbitrary commands when files change, I use this for automating tasks like running tests or building documentation. Although I am recently looking at [watchexec](https://github.com/watchexec/watchexec) as its a simpler and more actively maintained alternative which is portable.

<div class="fancy-divider-long"></div>

## :computer: Hardware and Operating Systems

Cutting my teeth on software development in the late 80s and early 90s when I was using Basic and Z80 on the ZX Spectrum, really spawned my appreciation of understanding the importance of how a computer works. 
I think this is no different today even with Cloud based systems, Virtualisation and Containerisation - as everything still runs on hardware somewhere.

 - [Ubuntu](https://ubuntu.com/) - From around 2006 after playing with [Knoppix](https://www.knopper.net/knoppix), Ubuntu became my home operating system of choice, I use it for all my home projects.

 - [XPS / Sputnik](https://ubuntu.com/blog/tag/project-sputnik) - In 2013 I became aware of this project and in early 2014 I became the proud owner of an XPS 13-9333 Developer Edition laptop. It had a touch screen and to this day it still is my most loved laptop.

 - Apple / macOS - I used to steer well clear of Apple hardware and software, but over the last few years I have needed to use macOS for work purposes.
 Perhaps the most convincing factor for me was sustainability, the fact that Apple Silicon is pretty much ARM architecture which I have experience with using the Raspberry Pi,
 means that the hardware is efficient and powerful. One of my main machines at home is now a MacBook Pro with M3 Pro chip and an M4 at work.

 - [Raspberry Pi](https://www.raspberrypi.com/) - In March 2012 I joined the waiting list and was not disappointed when I received my first Raspberry Pi (Model B), which still finds its uses today along with a Pi Zero 2 W.
This tiny computer sparked my interest in ARM architecture and embedded systems, which has influenced my hardware choices since.
It also sparked my interest in [ESP32](https://github.com/agucova/awesome-esp) based microcontrollers for IoT projects and with the [Yocto Project](https://www.yoctoproject.org/)

 - [ThinkPad X280](https://en.wikipedia.org/wiki/ThinkPad_X200) - My first ThinkPad, which I acquired second hand and I do love this little machine.

 - [Android](https://www.android.com/) - I have worked on Android development projects in the past, along with [Javacard](https://www.oracle.com/java/technologies/javacard-overview.html) but its been a while since I did any serious work in this area.
 More recently I have developed on Android using [Kotlin](https://kotlinlang.org/).

 - [VideoCore](https://en.wikipedia.org/wiki/VideoCore) - I've also been involved in a radar project using VideoCore, the same chip that powers the Raspberry Pi.

<div class="fancy-divider-long"></div>

## :star: Work Philosophy

As with any philosophy, there are many schools of thought and approaches which means I'm always learning new ideas.
This section is an attempt to summarise my own experience and approach to working in technology teams.

I've had experience in a variety of approaches to software development, the main ones being:
 - Waterfall
 - Scrum
 - Kanban
 - Lean
 - VFQ - Velocity, Flow, Quality

All of these processes have their own applications given the right context and in a nutshell, the rest of this section outlines my view on the different dimensions that influence how a project is run.

<div class="fancy-divider"></div>

### The Team

First and foremost its about the people, not the process (sound familiar).
I'm not going to make any trite statements about team building, but I will say that a team that communicates well and trusts each other is more likely to succeed than one that doesn't.
And the building of this is one of the most important aspects of any project.

This building exercise revolves around building the following habits with the team, which includes if you have them and at what cadence:
 - **Team Health Checks**, I like to do these as a weather report, keeping track on how it changes over time. 
These check-ins can be done on your regular cadence by simply allowing each person to fill in their report on a collaborative page, leavng time at the end for anyone who wants to, to discuss any of the points raised.
These reports are done across the dimensions of:
   - Communication & Collaboration - this can be split between within the team, throughout the organisation and with external stakeholders
   - Trust / Psychological Safety - I have found how some amazingly small things can really affect a team.
   - Outlook / Morale - are we positive about the work we are doing?
   - Workload - do we have enough work ready to keep us busy, but not overwhelmed?
   - Process - is the process working for us?

 - **Retrospectives**, I often suggest these are done on request, but at least as part of a postmortem, should the team be developing a production system.
The rationale for this is they often don't have a goal and so people can feel that they need to come up with something and so feel its a waste of time.
On the contrary, these are important and so not diluting their value is important. 
Team health checks normally provide the necessary ongoing visibility into how the team is doing.
 - **Pair Programming / Mob Programming**, again this is very team dependant, but I have found doing this regularly very valuable both technically for knowledge sharing and inspiring as a pragmatic way of team building.
 - **Knowledge Sharing Sessions** - everyone has something to share, and as I quoted in my opening statement, diversity of thought and experience is a great asset to any team.
 - **Mentoring** - similar to knowledge sharing, but more focussed on the individual and their growth within the team and organisation. 
I have benefited greatly from mentoring in my career and so I try to pay it forward where I can.

<div class="fancy-divider"></div>

### The Conversation

One of the quotations you will hear me say often is:
> Software is a conversation

Here I mean software in the very general sense of the term, i.e. from end to end...
Starting with "**requirements** is conversation" ... often new engineers will have an expectation that requirements are given to them on a plate, I expect this is largely due to the fact they come straight out of university or some course where they have been given assignments to complete, devoid of any real world mess.

Next "**design** is conversation" ... do the stakeholders really want something that is bullet proof, horizontally scalable, a fully service orientated architecture at this stage?
As with any conversation, the previous one is never fully complete so you will always unearth requirements as you go along.
More of that in the next section.

Something all teams are good at is "**implementation** is conversation" as this is the day-to-day work of software development.
The expectation should always be that this conversation can and does open up the previous conversations as now they become better informed.

"**testing** is conversation" ... "**deployment** is conversation" ... "**maintenance** is conversation" ... these conversations really pivot on the previous ones. 
That isn't to say that the conversation is closed, just that the cost of adjustment in these later stages incurs a greater cost.
One engineering waterfall process is the V model which emphasises the importance of testing and validation against what was originally specified.
Where agile processes tend to be weak is recognising this inflection point in the project life cycle.

<div class="fancy-divider"></div>

### The Mistakes

Another quotation I often use is:
> Don't let perfect be the enemy of good  -- **Voltaire**

Again I suspect this stems from the influence of study environments making students mistake adverse.
In reality, software development is a messy business and so the expectation that everything can be perfect from the outset is unrealistic.
I often see software projects like research, where attempting solutions is the primary goal, and thus the expectation of failure is high.

None of this is to say that quality should be compromised, but rather that the approach to quality should be pragmatic as we work toward a viable solution.
Put simply as the project matures so do the processes we use, there is no value in quality hindering progress in the early stages of a project.
Likewise there should be tighter quality controls and more cautious development in the later stages of a project.

Another point to mention that I've seen throughout my career is the tendency to over-engineer solutions.
This is often driven by a desire to showcase technical prowess, but often leads to solutions that are overly complex and difficult to maintain.
The key is to find the right balance between simplicity and functionality, most of all business relevance which takes us onto our next section.

<div class="fancy-divider"></div>

### The Business

Understanding the overall business context for a project or a product is the mark of a mature engineer.
This means understanding not just the technical requirements, but also the business goals and how the software fits - or doesn't.

Like it or not most organisations view a development team like the engine of a vehicle.
Where the organisation uses some crude form of control without recognising just how complex and the amount of work that goes on under the hood.
This is where understanding and using metrics to communicate progress and value is essential.

Here are just a couple of ways an organisation uses to measure progress:

 - **OKRs** - Objectives and Key Results, used by organisations like Google to set and communicate goals.
These are normally set at a high level across the departments and then broken down into smaller, more manageable pieces.
The aim is to ensure that everyone is aligned and working towards the same goals.

 - **KPIs** - Key Performance Indicators, used my larger commercial organisations to measure the success of a project or product.
These are normally set at a more granular level and are used to track progress against specific goals and tend to be more metric focussed.

Finally, I need to mention "Enterprise Architecture" as a way of communicating throughout large organisations. 
At its most simple these are diagrams that show how different systems and components fit together within an organisation.
I've mainly be involved with using [The Zachermann Framework](https://www.zachman.com/about-the-zachman-framework) as a way of communicating across different teams and departments 
However there is also [TOGAF](https://www.opengroup.org/togaf) which is more process orientated
and the DOD have their own [DoDAF](https://dodcio.defense.gov/Library/DoD-Architecture-Framework/) which is more focussed on defence systems.

<div class="fancy-divider-long"></div>

## :package: Projects

I'll end with some of the projects I've been involved with in the last few years (since 2023):

 - 2025 Legal startup rewriting their platform to move away from PHP and simplify a complex micro-services and messaging architecture, using FastAPI, Procrastinate, Postgres
 - 2025 Tech Lead for a platform for genomic based applications in healthcare, using Django, React, k8s on AWS
 - 2024 [Multilateral Climate Funds](https://climateprojectexplorer.org/), I co-led the development with a Product Owner to deliver for COP-29. This was build on our own platform that used FastAPI and Postgres to interface with Vespa for search (using knn embeddings) and React for the front end.
 - 2023 [Climate Policy Radar](https://climatepolicyradar.org/) - I started as co-developer to help build and get into production the platform to allow searching over climate documents, a lot of this work was simplifying and reworking what was there to make it extendable.
 - Community Project: [Lyward Colley Workshop](https://www.lywardcolley.co.uk/) helping educate SEN students with woodworking and electronics skills.
 - Community Project: [Repair Cafe](https://www.facebook.com/groups/218644507309483/)

Previous to this I have worked on a variety of projects across industry sectors including:
 - Healthcare
 - Open Access Publishing
 - Content Delivery Networks
 - Telecommunications / Satellite
 - IoT
 - Digital Audio
 - CAD/CAM
