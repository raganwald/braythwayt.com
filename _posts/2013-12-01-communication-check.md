---
layout: default
title: Communication? Check!
---

I have recently been reading [The Checklist Manifesto][amazonlink] by Atul Gawande. (A shorter version of the material appeared the [The New Yorker](http://www.newyorker.com/reporting/2007/12/10/071210fa_fact_gawande).)

Checklists are, on the surface, tools for making sure that we do the same thing exactly the same way, every time. Checklists are for practices that can be repeated by rote. Like making hamburgers ("Griddle at 475 degrees? Check!") As such, they seem to have *nothing* to do with software development. Nevertheless, I decided to be curious about checklists. I read the book with an open mind.

![check!](http://braythwayt.com/assets/images/checklist.jpg)

The book *does* begin with the kind of checklists I'm used to. The pre-flight checklist for an aircraft. Then it turned to examples from medicine and construction. Once upon a time, construction was ruled by "Master Builders," highly experienced individuals who understood all of the details of the project and could micro-manage it at every level. Their approach to management was biblical:

> For I am a man under authority, having soldiers under me: and I say to this man, ‘Go,’ and he goeth; and to another, ‘Come,’ and he cometh; and to my servant, ‘Do this,’ and he doeth it.”—"The Centurion and his Servant"

### the end of the master builder

Times have changed. The Master Builders died off. Construction has become so complicated that no one person can hold all the details in their head. Instead of master builders, we now have project managers coördinating the work of many specialized individuals, each of whom has only cursory knowledge of related trades.

![The Citigroup Building](http://braythwayt.com/assets/images/Architectural-Design-of-Citicorp-Building_5.jpg)

Physical construction appears to be an activity dominated by things we know. We know when the concrete will arrive, we know how much wood we need to build a form to hold the concrete, we can order the exact amount of rebar in advance and so on.

But all projects involve the unexpected. When the Citigroup building was designed, engineer William LeMessurier specified an inertial damper to handle swaying in storms. He also specified that crucial joints in the building's braces be welded. But contractor Bethlehem Steel opted to bolt the joints, a technique that was cheaper, but left the building vulnerable to collapse in seventy mile-an-hour winds.

Without a master builder that knows all of the details, individual specialists make decisions without sufficient information to make good decisions. The more complex the project, the more decisions need to be made, and the more vulnerable the project is to someone making a bad decision because of limited information.

The only way to reliably make good decisions is for the specialists to communicate with each other so that decisions are made by all of the people with the relevant insight and experience.

Without a master developer to dictate every detail in advance, and without a single master of all the specialized areas of knowledge, construction is a *communication problem*. And so, it turns out, is medicine. Medicine is a communication problem. Complex fields with interdisciplinary teams are communication problems.

Obviously, a construction schedule--a checklist of things changes to make to the physical status of the project--is not a tool for helping specialists communicate with each other.

### submittal checklists

Atul Gawande observed that construction projects have a scheduling checklist as we expect, and they also have a *submittal checklist*. In its most literal form, a submittal checklist is a list of pieces of information to be submitted. To obtain a building permit, the City of Orlando has a [detailed submittal checklist](http://www.cityoforlando.net/permits/pdfs/BLD%20Commercial%20Plans%20Submittal%20Checklist.pdf) listing exactly what forms and documents need to be supplied.

This sounds like a typical construction checklist, a list of things to do. But it isn't really a list of things to *do*, it's actually a list of *things you need to have researched*. The forms and documents are mechanisms for either demonstrating that you've learned something or mechanisms for sharing what you've learned. They also include a list of people you have to have talked to, in the form of requirements for certain documents to have been "signed off."

A construction checklist defines changes in state of the physical state of construction. A submittal checklist defines things we need to know and the people who need to think about them.

### software is a communication problem

Software has also moved beyond the "master builder." We still have a few notable and justifiably admired exceptions, but the industry norm is team of knowledge specialists. A database analyst and a programmer both have an interest in understanding what kinds of queries are made, and how to optimize them, but a solution requires changes to both code and database configuration, so they have to get together and share information.

It's true that software development is a very uncertain complex team activity. It is very hard to manage it with construction checklists. But the *communication* aspect of software development is amenable to structure. Software development benefits from submittal checklists.

This isn't a revolutionary idea. SCRUM practitioners, for example, have a daily "stand-up" meeting and a monthly recalibration with the entire team specifically to encourage communication from the bottom up. But we can still learn from construction.

For example, in construction the emphasis is on bottom-up submittal checklists. Submittal checklists are updated in real time as information is discovered, not scheduled in advance. If a worker discovers a problem, they can create a new item and define who else needs to "sign off" on a solution. There is some discipline: The signoffs have to happen, this isn't a loosey-goosey discussion happening over email or on a wiki. But it isn't a Big Design Up Front plan where all the analysis is done in the analysis phase before any lines of code are written.

### why we need to move beyond "discussions"

Is that distinction too fine? Why can't we have discussions and emails and pair programming and reap the rich rewards of high bandwidth communication in real time? Well, we need submittal checklists for the same reason that we need automated test suites verifying that the physical status of the program is changing in well-defined ways.

Humans make mistakes, especially expert humans under time pressures. Pre-surgery checklists improve medical outlines by ensuring that everything that needs to be done is actually done and not just thought to be done. Submittal checklists make sure that everybody who needs to have input into a decision or situation actually has input into that decision or situation. And not just those who take an interest, or notice. And nobody is "thought to have signed off" until they've actually signed off.

I conjecture that formalizing submittal checklists would help team software development, without sticking it in a straightjacket. Not top-down workflows, but bottom-up discussions with a touch of ceremony added to ensure that the communication actually happens.

### read the book!

I often say that a book is worth reading if there's just one new idea in it. Submittal checklists are just one idea I've gleaned from The Checklist Manifesto. I recommend reading the book with an open mind and paying especial attention to its discussion of complex team activities and of bottom-up management.

I'll spare you an observation about the parallels between the doctor-nurse and architect-programmer relationships. Just [read the book already][amazonlink].

[![The Checklist Manifesto](http://braythwayt.com/assets/images/TheChecklistManifesto.png)][amazonlink]

[amazonlink]: http://www.amazon.com/gp/product/0312430000/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0312430000&linkCode=as2&tag=raganwald001-20

(discuss on [hacker news](https://news.ycombinator.com/item?id=6829482))