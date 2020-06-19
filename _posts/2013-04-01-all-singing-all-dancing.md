---
title: My All-Singing, All-Dancing Interview Question
layout: default
published: false
---

It is with trepidation, (and this paragraph of terpsichorean rationalization), that I introduce the "All-Singing, All-Dancing Interview Question," as mentioned in my presentation [What We Lost in the Fire: How We Completely Missed Smalltalk's Point](http://www.haikudeck.com/p/2YXMMZkJP5/what-we-lost-in-the-fire).

The question is:

> If you had a completely blank piece of paper, absolutely no interoperability or familiarity or legacy compatibility requirements, how would you design a new computer language?

Real life is not even remotely like this, of course. A computer language designed on a blank piece of paper is very much like designing a concept car: Lacking constraints on price, mileage, weight, or anything else, there are few meaningful decisions to be made.

Great products exist when people "colour within the lines" of existing constraints and are very, very picky about when they decide to "break the rules" and make a bold break with the status quo.

So quite honestly, this is not a good question for evaluating a person's programming language design skill. But I think it's a great question for spurring discussion of all of the things around programming syntax. How does project management work? How do you deploy things? How does one share a library or other piece of code? What's the deal with testing? And so on.

Like so many "pet" interview questions, I like this one because I find it fun to think about the possible answers myself. That makes it dangerous to ask. Am I asking you because I'm interested in you? Or because I like talking about my own answers?

I haven't asked this of anyone else and I may never do so. I'm a little too emotionally invested in it. And so to my my own answers.

### if i had a blank sheet of paper

You know how people talk about how little progress automobile tech has made compared to information tech? I feel the same way about programming languages and tools. My mother is over seventy. She programmed with punch cards and tape decks. When I was a child, she showed me actual core memory (little ferrite cores strung on conducting filaments).

And yet, while my iPhone shocks us both with its breathtaking power, languages like Ruby and Python are only a little better than incremental advances over the COBOL of her day. Maybe on order of magnitude better. But I ask you to compare an iPhone to the hard-wired bakelite handset that would have sat on her desk. We are not talking about being one order of magnitude more awesome, people.

Where is this same progress in programming languages? I feel like the cobbler's children have no shoes, we have been so busy making software that eats the world, we neglected ourselves.

### damn the text. damn it all to hell.

I don't think there's a right answer to this question. My own gut feeling is that we're ready to make a break from text files as the primary medium for manipulating programs. But I get the argument that it's great to be able to `grep` a code base without having to use an API to talk to the cloud and without having to fire up some walled garden IDE.

But yes, I would throw text files away and good riddance. In no other field of activity can I tell someone "You use an editor to define your foobars in a text file, then you upload it to the server and the server does something interesting with it."

Balderdash! Explanations that they can use the text editor of their choice, or that they can rep things, or whatever, are pure garbage. And the backflips we do to maintain the status quo are painful.

Alan Perlis defined the "Turing Tarpit" as a place where everything is possible, but nothing of interest is easy. That's how I feel about text files. Not text syntax, but the files themselves.

Sure grep and using the editor of your choice are easy. But everything else of interest like analysis, macros, automated refactoring, and so on all require a silo'd parser to convert the program into something else.

Why not work with the something else in the first place? And I don't mean, write programs in s-expressions. I may be able to throw the parser out and just work with lists, but I still have the problem of deducing who wrote what, or which pieces of code changed when test #365 broke, or finding all the references to the `nibblich` slot in the `boko` frame.

### scale

Alan Perlis again: "Around computers it is difficult to find the correct unit of time to measure progress. Some cathedrals took a century to complete. Can you imagine the grandeur and scope of a program that would take as long?"

I can't imagine it. But I can imagine the hell of trying to coördinate the activities of thousands of people working over centuries. I don't think `git` will get us there. Here's the thing. Underneath all of our tools is a weird basic assumption that there is a program, singular.

That actually completely goes against the original principle of OO, which was about messaging. Today, there is one working example of a purely messaging-oriented programming system, and it's the Internet. When I try to imagine a "program" on that scale, my head hurts. Bt I do know certain things about it, like it's possible that one piece is running on Rails 4.0 and another piece is still in 2.x.x because it isn't broken.

Anything built to handle software on this scale has to be completely liberated from all of our conceits around the idea of a monolithic code base with a single set of gems and versions and so on. We have to grasp the idea of lots of independent parts. This is what we claim we're doing with OO, and what we claim we're doing with dependency injection and inversion of control, but we've been drinking the kool-aid for so long that we've forgotten what we're trying to achieve.

`git` also is built around Linux and Linux and it's great for that. But a program the size of the Internet can't have one benevolent dictator for life. People don't scale that way. You can't hand out  commit bits based on merit. It's the other way around, everyone gets to commit but not everyone merges everyone else's code.

That's not how Linux works, but it's how OSS works.

Scaling systems is hard. How do you discover stuff? How do you share stuff? Look at Github, it's a hard problem keeping people informed of what interesting things are happening. I gave up on my "feed," I rely on Reddit and Hacker News and Twitter. A really great software ecosystem needs to solve this problem, because I want  to know when someone writes some code that fixes a bug I care about.

Nothing less than Internet scale software development will satisfy me if I'm starting with a blank sheet of paper.

### real-time

You'd think this would be obvious in an age of text messaging and pair programming. But software development is 24/7/365 and *continuous*. Only a berzerker would plan an Internet-scale application with major release dates set years in the future. Today, software development is like an assembly line with information and ideas coming in one end and patches rolling out the other. It's a continuous process, not a project with clearly defined start and stop dates.

If I have a blank piece of paper, I don't want to try to revert back to monolithic command-and-control planning, I want to accelerate this process. You know how we can do `A/B` testing on a web site? I want all software to do `A-Z`, `aa-zz`, and whatever-else versioning. If one person somewhere wants a button do do something, I want to push their button to them right away, and roll it out to others later if need be.

Programming in real time implies all sorts of things like updating servers "hot," and being able to revert anything or everything in both code and data. if the button I rolled out borks their account, I want to roll the button and the transactions it generates back.

Right now we do this ridiculus thing where we act like we're using a typewriter that has no "undo," so we are insanely careful about what we type. Isn't it better to design our tools to be more forgiving so we can program in real time?

Likewise, I think it's insane that we are constantly chin-wagging about how code is written to be read by humans, but little or no work of interest is being done on sharing code in real time between humans. Pairing over the internet should be the default capability of all tools. Screencasts should not require extra tools, if we're writing code to educate people, they should be able to look over our shoulders any damn time they like. Or replay our coding.

What's the big deal here? It's a goddamn solved problem for the software e write for others, why are we such conservative laggards when it comes to the software we write for ourselves?

### bitch, bitch, whine, moan

It's relatively easy to complain, but much harder to propose solutions. So having complained, here's my solution as I would write it on a whiteboard.

1. There's an API for synchronizing data about program updates in real time. It's well-specified. You can write a plug-in for your legacy text editor or IDE.
2. There's a reference editor that LIVES IN A WEB PAGE. I want people to be able to write software anywhere on any device.
3. You can install a native client if you like, but under no circumstances are you writing `sudo package-borker install whatsis` for libraries and so on. You grab a library, it synchonizes with your local rep, and you have all of its versions and everything virtually available to you. That's baked into the language. Death to yak-shaving, and not a moment too soon.
4. There is no distinction between servers and development systems, although you can certainly roll changes out only to yourself. If you distribute your program on EC2, you just happen to be running the environment on some big iron in Amazon's data centers.
5. Everything is real-time and collaborative. If Google Docs can handle concurrent editing, so can this IDE. This is 2013.

And that's it. Everything else is just a question of filling in the details, right?

;-)