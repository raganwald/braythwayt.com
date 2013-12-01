---
layout: default
title: Communication? Check!
categories: noindex
---

I have recently been reading [The Checklist Manifesto](http://www.amazon.com/gp/product/0312430000/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0312430000&linkCode=as2&tag=raganwald001-20) by Atul Gawande. (A shorter version of the material appeared the [The New Yorker](http://www.newyorker.com/reporting/2007/12/10/071210fa_fact_gawande).)

Checklists are, on the surface, tools for making sure that we do the same thing exactly the same way, every time. Checklists are for practices that can be repeated by rote. Like making hamburgers ("Griddle at 475 degrees? Check!") As such, they seem to have *nothing* to do with software development. Nevertheless, I decided to be curious about checklists. I read the book with an open mind.

![The Checklist Manifesto](http://braythwayt.com/assets/images/TheChecklist-bookshot-432x550.jpg)

The book *does* begin with the kind of checklists I'm used to. The pre-flight checklist for an aircraft. Then it turned to examples from medicine and construction. Once upon a time, construction was ruled by "Master Builders," highly experienced individuals who understood all of the details of the project and could micro-manage it at every level. Their approach to management was biblical:

> For I am a man under authority, having soldiers under me: and I say to this man, ‘Go,’ and he goeth; and to another, ‘Come,’ and he cometh; and to my servant, ‘Do this,’ and he doeth it.”—"The Centurion and his Servant"

### The End of the Master Builder

Times have changed. The Master Builders died off. Construction has become so complicated that no one person can hold all the details in their head. Instead of master builders, we now have project managers coördinating the work of many specialized individuals, each of whom has only cursory knowledge of related trades.

![The Citigroup Building](http://braythwayt.com/assets/images/Architectural-Design-of-Citicorp-Building_5.jpg)

Physical construction appears to be an activity dominated by things we know. We know when the concrete will arrive, we know how much wood we need to build a form to hold the concrete, we can order the exact amount of rebar in advance and so on.

But all projects involve the unexpected. When the Citigroup building was designed, engineer William LeMessurier specified an inertial damper to handle swaying in storms. He also specified that crucial joints in the building's braces be welded. But contractor Bethlehem Steel opted to bolt the joints, a technique that was cheaper, but left the building vulnerable to collapse in seventy mile-an-hour winds.

Without a master builder that knows all of the details, individual specialists make decisions without sufficient information to make good decisions. The more complex the project, the more decisions need to be made, and the more vulnerable the project is to someone making a bad decision because of limited information.

Without a master developer to dictate every detail in advance, and without a single master of all the specialized areas of knowledge, construction is a *communication problem*. And so, it turns out, is medicine. Medicine is a communication problem. Complex fields with interdisciplinary teams are communication problems.

Obviously, a construction schedule--a checklist of things to do--is not a tool for helping specialists communicate with each other.

### submittal checklists

Software has also moved beyond the "Master Builder." We still have a few notable and justifiably admired exceptions, but the industry norm is team of knowledge specialists. A database analyst and a programmer both have an interest in understanding what kinds of queries are made, and how to optimize them, but a solution requires changes to both code and database configuration, so they have to get together and share information.

Software is a complex field, with teams of specialists that need to communicate. Even if we can't learn from how construction projects schedule construction activities, can we learn something from how construction projects get specialists to communicate?

