---
title: Herd Thither, Me Hither (revised)
layout: default
---

I read another one of those [Why 'shiny-thing' is the unsafe choice][lostechies] essays today. It trots out some reasonable-sounding arguments:

[lostechies]: http://lostechies.com/bradcarleton/2013/10/23/coffeescript-vs-javascript-dog-eat-dog/

1. The new shiny thing doesn't have a mature toolchain.
2. More people know the old, well-used thing than the new thing.
3. The upside is uncertain.

There's some damning with faint praise tossed in to let you know that the author is open-minded and not a curmudgeon, of course. Altogether, it explains succinctly why everyone ought to keep on doing what everyone's already doing. I remember reading essays exactly like this about Ruby back when everyone was using Java, and before that about Java when everyone was writing CGIs in C.

I'm not going to debunk the arguments. The arguments aren't interesting. They aren't really convincing, either. For the most part, people reading the essay have already made up their minds about whether to adopt something that the rest of the world isn't using widely.

If the arguments aren't changing people's minds, what good are they? What good is they essay? Why do people write these essays? Why do people debate them so fiercely if they have little or no effect on people's actual decisions?

### Why are people so invested in appearing to research a decision?

This is the interesting thing: Why are people so invested in appearing to research a decision, when in reality, they have already made up their minds and their conclusion has been preordained?

Let me retell a story.[^anecdote]

[^anecdote]: Every blog rant has is required to contain exactly one anecdote, it's a rule. And because people over forty don't learn anything new or accumulate new experiences, they are compelled to retell the same anecdotes over and over for the rest of their lives

My friend Anthony and I sold Macintoshes during the dark days when [The Usurper Prince John][sculley] had cast the [Rightful King][jobs] out of [Albion].

[sculley]: https://en.wikipedia.org/wiki/John_Sculley "John Sculley III"
[jobs]: https://en.wikipedia.org/wiki/Steve_Jobs "Steve Jobs"
[Albion]: http://apple.com "Apple"

![Macintosh IIfx](/assets/images/iifx.png)

In those days, nobody bought Macintoshes. You would think that therefore, Anthony and I would have a lot of free time to bemoan our fate as Mac salespeople, but no: Our days would be full of people requesting proposals to sell them Macintoshes. Our office was besieged by people wanting us to demonstrate the Macintosh and its nifty features.

Did these people buy a Macintosh? No. As I said, nobody was buying Macintoshes. But they would take up a lot of our time asking "What is the benefit of Mac? Why is it superior to Windows? Explain why we should I buy one for each employee." And no matter how interested they seemed, and no matter what we said or did, they would weigh their options and then buy a Windows computer.

When it came time to make a decision, they would always gives us a very reasonable explanation why Macintosh was great, and they agreed it would be an excellent choice, but something-something-why-they-couldn't-buy, such as "Macintosh is great, but our team can't handle switching," or perhaps "The desktop publishing is fantastic, but words are words no matter what they look like," or even "The company simply won't approve this purchase without more case studies and white papers."

Of course, what they really meant:

> Nobody ever got fired for buying a Windows Box.

To almost all of these tire-kickers, doing something that nobody else was doing was all downside risk. If it went wrong, they looked bad for being different. Whereas if they bought a Windows Box and had a shitty experience, well, it was the same shitty experience everyone else was having, so how could they be blamed?

They weren't interested in finding out whether Macintosh would be useful for them. They sorta-kinda-knew it was, but they also knew that their lives would go on just fine without it. Just as your life or my life might go on just fine without writing our next application in Clojure, or without using the [allong.es] JavaScript library.

So why ask about Macintosh? The fact is, they were interested in being able to say to the world that they have an open mind and researched all the possibilities and did their homework and somehow, *somehow*, they had finished up back where they started, using the same damn thing that everyone else used.

Just as twitter or reddit or whatever social media might be ablaze with arguments about some new programming language, but in the end, most people are going to carry on doing what everyone else is doing.

### Herd thither, me hither

I said that "nobody was buying Macintosh." That's not true. Sales at Apple increased from $800 million to $8 billion under John Sculley's management. Anthony and I actually sold a lot of Macintoshes. The trick was, we tried to spend as much time as possible with people who hadn't already decided not to buy a Macintosh. Salespeople call this "qualifying the customer."

To qualify the customer for a new idea, you have to figure out if someone is going to end up doing what everyone else is doing, or if they're going to end up doing something nobody else is doing. In other words, are they going with the herd? Or is their philosophy "Herd thither, me hither?"

You can't simply ask someone if they have no intention of buying a Macintosh. Everybody lies, especially to salespeople. You need to understand why they're in your office in the first place. The key question we learned to ask was always this: "What other projects and ideas are you looking at to improve your productivity/results?"

A "Going with the herd" person usually doesn't have any other projects on the go. "Oh, I was just looking to see whether it made sense to consider Macintosh in this budget cycle." That's a dead end discussion, they have no motivation, no goal, no reason to zig while the herd zags.

Whereas a "Herd thither, me hither" person has a completely different answer: "For this new division, we need to cut the turnaround on proposal generation. So we're looking at Macintosh for desktop publishing, but we're also talking to Xeros about their Office Automation, and we're considering opening a new office closer to our customers, and..."

The "Herd thither, me hither" person is committed to doing new things, they're just trying to figure out *which* new things make the most sense.

So the easy question to ask is this: "Are you trying to figure out *whether* to change? Or trying to figure out *which change to make*?"

### CoffeeScript vs. JavaScript? Or vs ClojureScript?

That same question works just as well for programming today as it did for Macintoshes in the late 80s. If someone asks "Why CoffeeScript," qualify them:

> Do you mean "Why CoffeeScript instead of JavaScript?"" Or do you mean, "Why CoffeeScript instead of ClojureScript, Dart, TypeScript, or Pajamas?"

If someone is asking about (or writing an essay about) CoffeeScript vs. JavaScript, that's the same thing as Macintosh vs Windows. It's all an elaborate rationalization for going with the herd. But if they're looking at CoffeeScript vs. TypeScript, they've already committed to "Herd thither, me hither." You know they have a sincere investment in the questions they're asking and the quality of the answers they come up with.

And yeah, sometimes a "Herd thither, me hither" person will hate significant whitespace. Or insist on a compiled, type-safe language. Maybe they have excellent reasons for disliking CoffeeScript.

But if the argument is CoffeeScript vs JavaScript, you might as well be arguing Macintosh IIfx vs. Compaq 486. The outcome has been decided in advance:

They're going where the herd goes.

---

*Disclaimer: I have no idea what the author of any one article--or any person whatsoever--is thinking. I have no idea whether someone might be a "Going with the herd" person today and "Herd thither, me hither" tomorrow. I don't know whether they're one way with programming languages but another with markets to enter. I really don't know anything at all. This post is simply an excuse to recount an anecdote, that's all.—Reg Braithwaite*