---
layout: default
title: Communication? Check!
---

I have recently been reading [The Checklist Manifesto](http://www.amazon.com/gp/product/0312430000/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0312430000&linkCode=as2&tag=raganwald001-20) by Atul Gawande. The idea seems so very simple, so simple that one can be forgiven for assuming that the book consists of a blog post fleshed out to fill a dead tree hardcover because that's what pays the bills. And yes, a shorter version of the material appeared the [The New Yorker](http://www.newyorker.com/reporting/2007/12/10/071210fa_fact_gawande).

But I try to overcome these feelings when presented with a book that has the potential to improve my work. You mileage may vary, but even if I turn page after page thinking to myself ("That is obvious"), if I find one page with a new idea, I can profit from that idea for the rest of my career.

![The Checklist Manifesto](http://braythwayt.com/assets/images/TheChecklist-bookshot-432x550.jpg)

Checklists are, on the surface, tools for making sure that we do the same thing exactly the same way, every time. Checklists are for practices that can be repeated by rote. Like making hamburgers ("Griddle at 475 degrees? Check!") As such, they seem to have *nothing* to do with software development. There is a repeatable, rote role in programming, I like to call it *compiling*. The thing we do with our brains, the thing that actually adds value, is not like making burgers or building construction, it's complex problem solving where every decision is, to a certain extent, a new thing calling for a new approach.

So it's easy to use this argument to dismiss checklists as not being relevant to software development, to assert that checklists are part and parcel of the "Big Design Up Front" thinking that presumes programming is an activity we can know with certainty and schedule with precision.

Armed with this expectation, why read an entire book about checklists?

Well, you might be *curious*. I can't tell you what "curiosity" is, but I can tell you what it isn't. It isn't looking at something and deciding that you're too busy to find out what it is and how it works. If you're a Ruby programmer, and someone told you that in JavaScript, everything's an object and that functions are first-class entities, it isn't curiosity to presume that there's nothing to learn from JavaScript, since you're used to everything being an object in Ruby, and you have Blocks, Procs and Lambdas in Ruby.

I decided to be curious about checklists. I read the book with an open mind.

The book does begin with the kind of checklists I'm used to. The pre-flight checklist for an aircraft. Getting an operating theatre ready for a patient. Then it turned to a deceptive example: Structural engineering.

### The End of the Master Builder

The third chapter of the book discusses the construction of large, complex buildings. Once upon a time, construction was ruled by "Master Builders," highly experienced individuals who understood all of the details of the project and could micro-manage it at every level. Their approach to management was biblical:

> For I am a man under authority, having soldiers under me: and I say to this man, ‘Go,’ and he goeth; and to another, ‘Come,’ and he cometh; and to my servant, ‘Do this,’ and he doeth it.”—"The Centurion and his Servant"

But the times have changed. The Master Builders died off. Construction has become so complicated that no one person can hold all the details in their head. Instead of master builders, we now have project managers coördinating the work of many specialized individuals, each of whom has only cursory knowledge of related trades.

![The Citigroup Building](http://braythwayt.com/assets/images/Architectural-Design-of-Citicorp-Building_5.jpg)

If you were to listen to people talking about project management, especially those who peddle software development methodologies, physical construction is an activity dominated by things we know. We know when the concrete will arrive, we know how much wood we need to build a form to hold the concrete, we can order the exact amount of rebar in advance and so on.

But without a master builder, who makes the master schedule? Who knows all about carpentry and concrete and welding and everything else? Construction now requires everyone to coöperate, at every level of detail. There's no master builder who knows everything, dictating every detail from on high.

And all projects involve the unexpected. When the Citigroup building was designed, engineer William LeMessurier specified an inertial damper to handle swaying in storm winds. He also specified that crucial joints in the building's braces be welded. But contractor Bethlehem Steel opted to bolt the joints, a technique that was cheaper, but left the building vulnerable to collapse in seventy mile-an-hour winds.

Without a master builder that knows all of the details, individual specialists make decisions without sufficient information to make good decisions. The more complex the project, the more decisions need to be made, and the more vulnerable the project is to someone making a bad decision because of limited information.

Software has also moved beyond the "Master Builder." We still have a few notable and justifiably admired exceptions, but the industry norm is team of knowledge specialists. A database analyst and a programmer both have an interest in understanding what kinds of queries are made, and how to optimize them, but a solution requires changes to both code and database configuration, so they have to get together and share information.

Without a master developer to dictate every detail in advance, and without a single master of all the specialized areas of knowledge, software development is a *communication problem*. And so, it turns out, is construction. Construction is a communication problem. And medicine. Medicine is a communication problem. Complex fields with interdisciplinary teams are communication problems.

Obviously, a construction schedule--a checklist of things to do--is not a tool for helping specialists communicate with each other.

### submittal checklists

