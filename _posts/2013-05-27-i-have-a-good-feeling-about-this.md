---
layout: default
---

Last Thursday I had the honour of delivering the opening talk (it wasn't a formal "keynote") at [Web Rebels](http://webrebels.org).

![Web rebels 2013](/assets/images/web_rebels.jpg)

One of the nice things about going first is that the audience doesn't have anyone to compare you to. You have a blank canvas to work with. But giving the first talk also carries with it a responsibility to be a little less specific and try for broad (within the context of the conference) appeal. It's not fair to give a highly specific technical talk and have half the audience thinking, "Impressive, but not of any use for me."

I'm a little obsessed with broadening the reach of programming right now, and one of my thoughts is that making it possible to program on even cheaper hardware is a thing. That may seem obvious given the arc of programming from research departments to mainframes to minicomputers to workstations to PCs, but people are still telling me that you can't program on a tablet and/or phone.

So as an experiment, I composed the entire presentation on my iPad Mini using [Haiku Deck](http://haikudeck.com). HaikuDeck is very specific: It creates presentations that are picture-heavy, and it tries to be a specific tool with just the right features for creating the one kind of presentation. I think it's great, and it left me wondering if tablets will move us gently away from "all-in-one" applications like Photoshop towards collections of tools.

I also started creating virtual posters for my talks using [Phoster](http://phoster.bucketlabs.net), a program for creating--well--posters. Is it page layout software? Is it an image editor? It's certainly lame if you think of it in those terms, but fine if all you want is a poster.

Here's an example for my talk at [SpainJS](http://spainjs.org):

![La Hermosa Vida](/assets/images/LaHermosaVida.png)

Again, a specific tool that has a strong focus and thus needs fewer features. And the features it does provide are even *more* valuable than the features you'd find in a general-purpose program, presuming you were trying to do the same thing.

I have been thinking about these programs in the contexts of tablets, but I think what makes them possible isn't the hardware, but rather that we are no longer trapped inside proprietary formats for things like images.

When everyone agrees on how to read and write PNG files, anyone can make an image tool.

### tools

Which brings me back to programming tooling. I wonder if the future is in smaller tools that interoperate. This has been a dream for forty years, and the closest we've come has been Unix and text files. My personal belief is that the image file format was Smalltalk's greatest strength and its greatest weakness.

The JVM makes it possible to write a program in Clojure but use tools designed for Java on it. Languages like Go are also extending the definition of a program's format beyond text. What if we start to embrace standard formats for things like parse trees?

Can you imagine the precambrian explosion of tools that could follow? Why would macros or computational complexity or debuggers or anything else need to be syntax- or even language-specific?

Text editors today have to be encumbered with plugins or extensions to handle parsing (or pseudo-parsing with regexes) languages. What if we ripped all that out of each editor and put it in the language, or in a standard middleware thingie that all tools could share?

I want to rant about the big ideas like programming at scale, but instead I'll mention this:

![Firefox OS Phone](/assets/images/firefox-os-phone.jpg)

[Comoyo](http://www.comoyo.com/no) are one of the Web Rebels sponsors, and they were giving away ice cream and [Firefox OS](https://en.wikipedia.org/wiki/Firefox_OS) phones like candy. I have made absolutely no secret of my interest in this project. Ultra-cheap hardware, open standards for development, open access to applications, and wireless internet all together add up to opening the market for creating software to another billion human beings, give or take a few.

Comoyo were kind enough to give one to me, and I can report that it is, indeed, "cheap." As it should be. It's cheaper and crappier than my iPhone 5 like PDP-11s were cheaper and crappier than an IBM-360. Like PX-XTs were cheaper and crappier than Macintoshes. Like desktop publishing on a LaserWriter was cheaper and crappier than on a Linotype.

You get the metaphor. But let's go past the phone and return to the idea of actually writing an app *on the phone itself*. That will be a shitty experience compared to using a MacBook Pro at your local Hipster coffee shop. But for a large number of people, it will be an option they never had before. That is really, really interesting.

While we're dicking around solving first world problems like how to discover each other's pictures of expensive food, people will have a chance to solve their own third world problems without suffering through the "Foreign Aid Theatre" farce of various corrupt NGOs raising funds to create committee-driven information technology failures.

Who knows what apps and services people will create for themselves? I'm excited to find out, and I hope you are too.

The story of programming tooling is far from over. Every which way I look, I see opportunities to invent new things. Small, focused tools designed for platforms like Firefox OS. Social coding apps that run at global scale. Big Data. Real-time collaboration. Composeable tools. All kinds of new and exciting things are waiting to be invented and/or discovered, and each one represents a sliver of humanity coming on line and creating value through software.

I came back from Web Rebels even more excited than I was when I arrived. I'd like to thank the organizers, especially Trygve Lie and Bodil Stokke, and the sponsors, particularly Github and Comoyo.

Next year will probably be even better. Don't miss it.

---

<iframe src="http://www.haikudeck.com/e/pjz03GUWZb" width="640" height="541" frameborder="0" marginheight="0" marginwidth="0"></iframe>