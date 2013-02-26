## _why not?

Is it [_why day](http://whyday.org/)? [It is](http://isitwhyday.com/)? Ok, let's do this:

> Treating a startup idea as a question changes what you're looking for. If an idea is a blueprint, it has to be right. But if it's a question, it can be wrong, so long as it's wrong in a way that leads to more ideas.---Paul Graham, [Ideas for Startups](http://www.paulgraham.com/ideas.html)

In [2005](http://weblog.raganwald.com/2005/10/im-not-young-enough-to-know-everything.html), I posed myself a Graham Question. I wanted to know if I could predict the future of a software development project empirically. My conclusion was "no," because I wound up viewing software development projects as games that people played, and systems for predicting and managing projects end up being gamed. (I might be wrong about that in general, or right in general but wrong about your project, so don't take my word for it!)

I haven't asked myself a Graham Question since then, but recently I started to feel an itch and I've been noodling around with an idea for a month. It's time for me to stop noodling and reframe the thing as a question so I can focus. My question is: "_Can we improve processes with software visualizations that emphasize the changes over time rather than the state of the world at any one time?_"

To pick an example, everyone knows what a to-do list is. Are you familiar with a [burn-down chart](https://secure.wikimedia.org/wikipedia/en/wiki/Burn_down_chart)?

[![Burndown](images/burndown_jpg_scaled_500.jpg)](http://posterous.com/getfile/files.posterous.com/raganwald/FHiDPAGPjNQmmBe40mtGEVrgqSTk58F8gkPmgxxRyozrE3Ng1Bn614U8b2q7/burndown.jpg)

A burn-down chart helps you understand when you'll be done. Visualizing how the outstanding work is changing over time is more important than a static view of outstanding work remaining. I am curious about visualizing change over time, and not just for project management. I see the same thing when composing a plan or design document. How are we doing? How is it coming along? If my "boss" or "client" wants to see the work in progress, do they want the draft document (which is analogous to having a list of tasks that have been done) or would they like to see a view of how the document has changed over time so they can get a feel for when it will be done? Could this be integrated with time tracking and invoicing? How about integrating the change to a code base over time?

I'm extremely interested in the user experience of visualizing processes and how things are changing, and now that I am holding a "process hammer," everything looks like a nail. A code base is actually a development process. A design document is an artefact of a design process. Everything of interest is part of a process we care about.

Under the hood, I can't help but wonder if my old-school approach software design needs a reboot. I tend to think of data representing the state of the world right now. That feels state of the art  for 1996. Maybe transactions and edits are the thing rather than models and data? I admit that I don't know but I want to find out.

There's another thing, and it's crucial. I'm extremely unsatisfied by "multi-user" and "collaboration" today. We're getting there under the hood with [collaborative real-time editing](https://secure.wikimedia.org/wikipedia/en/wiki/Collaborative_real-time_editor). But there's so much to do, and I'm wondering whether the problem of dealing with changes over time is related to the problem of dealing with changes over "space," i.e. with changes being made by other people. Perhaps the question "How has this project changed" can be answers with the same tech we use to answer the question "What is raganwald doing?"

![Url](images/url.jpg)

The answers are elusive. Many software projects have failed because they automated the wrong thing. To vastly oversimplify an example, if you observe [air traffic controllers](http://mentalmodels.mitre.org/cog_eng/reference_documents/ethnographically-informed%20systems%20design%20for%20air%20traffic%20control.pdf), you see they have these strips of paper that they keep in a board. They write things on the paper and move the strips around. A naïve UX designer might suggest replacing the strips with screens so that the staff would not have to get out of their chair and interact with the board. The trouble is, observing other people interacting with the strips is a big part of the information conveyed by the system. If you hide that by replacing the strips with a display of the current status of the planes, you lose some of the communication between the participants. You have to find a way to replace that communication if you want to automate the system.

Just as I'm curious about whether we can improve processes with software that visualizes changes over time, I'm also curious about visualizing participation over space, and I recognize that it's not an easy problem to solve. In some ways, it look alike the visualizing changes over time problem. In other ways---as exemplified by the air traffic controller strips example---it looks completely different.

Either way, I'm interested, I'm in, and today is a beautiful day to make it official.

> I'm just going to keep trying to find interesting problems to work on, and if one of them happens to change the world, then great. And if not, at least I'll have had fun trying to solve some hard problems.---28/w, [Joel on Software Discussion Board](http://discuss.joelonsoftware.com/default.asp?joel.3.480878)

[Permalink](http://raganwald.posterous.com/august-19-2011)
