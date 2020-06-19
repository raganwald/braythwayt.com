---
title: Herd Thither, Me Hither (revised)
layout: default
published: true
---

I read another one of those [Why 'shiny-thing' is the unsafe choice][lostechies] essays today. It trots out some reasonable-sounding arguments:

[lostechies]: http://lostechies.com/bradcarleton/2013/10/23/coffeescript-vs-javascript-dog-eat-dog/

1. The new shiny thing doesn't have a mature toolchain.
2. More people know the old, well-used thing than the new thing.
3. The upside is uncertain.

There's some damning with faint praise tossed in to let you know that the author is open-minded and not a curmudgeon, of course.[^disclaimer]

In sum, it explains why everyone ought to keep on doing what everyone's already doing. I remember reading essays exactly like this about Ruby back when everyone was using Java, and before that about Java when everyone was writing CGIs in C.

[^disclaimer]: Of course, I have zero idea what the author of any one article--or any person whatsoever--is thinking. I have no idea whether someone might be a "Going with the herd" person today and "Herd thither, me hither" tomorrow. I don't know whether they're one way with programming languages but another with markets to enter. I really don't know anything at all. This post is simply an excuse to recount an anecdote, that's all.

I'm not going to debunk the arguments. The arguments aren't *convincing*, in the sense that I don't believe anybody will read the essay and change their mind about using something that isn't already popular. I don't think it's the author's fault: Essays of this general type ("Should you switch from popular thing to shiny thing") have little or no actual impact on people's decisions.

But if these essays won't change anybody's mind, why do people write them? Why do people read them and debate their contents?

This is the interesting thing: Why are people so invested in appearing to research a decision, when in reality, they have already made up their minds and their conclusion has been preordained?

### Why CoffeeScript is like a Wicked-Fast Macintosh

Let me tell you a story: My friend Anthony and I sold Macintoshes during the dark days when [The Usurper Prince John][sculley] ruled [Albion][apple] whilst the [Rightful King][jobs] lived in [exile][NeXT].[^anecdote]

[^anecdote]: Every blog rant has is required to contain exactly one anecdote, it's a rule. And because people over forty don't learn anything new or accumulate new experiences, they are compelled to retell the same anecdotes over and over for the rest of their lives. If you don't want to end up like this, commit to trying new things and going new places.

[sculley]: https://en.wikipedia.org/wiki/John_Sculley "John Sculley III"
[jobs]: https://en.wikipedia.org/wiki/Steve_Jobs "Steve Jobs"
[apple]: http://apple.com "Apple"
[NeXT]: https://en.wikipedia.org/wiki/NeXT "NeXT Computer"

[![Macintosh IIfx](/assets/images/iifx.png)](https://en.wikipedia.org/wiki/Macintosh_IIfx "Macintosh IIfx")

In those days, nobody bought Macintoshes. But strangely, our office was besieged by people wanting us to demonstrate the Macintosh and its nifty features.

Would these people buy a Macintosh? No. But they would take up a lot of our time asking "What is the benefit of Mac? Why is it superior to Windows? Explain why we should I buy one for each employee." And no matter how interested they seemed, and no matter what we said or did, they would weigh their options... and then buy a Windows computer.

They agreed that Macintosh would be an excellent choice, but something-something-why-they-couldn't-buy, such as "Macintosh is great, but our team can't handle switching," or perhaps "The desktop publishing is fantastic, but words are words no matter what they look like," or even "The company simply won't approve this purchase without more case studies and white papers."

What they really meant was, *Nobody ever got fired for buying a Windows Box*.

To almost all of these tire-kickers, doing something that nobody else was doing was all downside risk. If it went wrong, they looked bad for being different. Whereas if they bought a Windows Box and had a shitty experience, well, it was the same shitty experience everyone else was having, so how could they be blamed?

They weren't interested in finding out whether Macintosh would be useful for them: They were interested in being able to say to the world that they have an open mind and researched all the possibilities, but somehow, *somehow*, they finished up back where they started, using the same damn thing that everyone else is using.

### Herd thither, me hither

> “Some people are little more than herd animals, flocking together whenever the world becomes uncomfortable … I am not one of those people. If I had a motto, it would probably be Herd thither, me hither.”—Erik Naggum

I said that "nobody was buying Macintosh." That's not true. Sales at Apple increased from $800 million to $8 billion under John Sculley's management. Anthony and I actually sold a lot of Macintoshes. The trick was, we tried to spend as much time as possible with people who hadn't already decided not to buy a Macintosh. Salespeople call this "qualifying the customer."

To qualify the customer for a new idea, you have to figure out if someone is going to end up doing what everyone else is doing, or if they're going to end up doing something nobody else is doing. In other words, are they going with the herd? Or is their philosophy "Herd thither, me hither?"

You can't simply ask someone if they have no intention of buying a Macintosh. Everybody lies, especially to salespeople. You need to understand why they're in your office in the first place. The key question we learned to ask was always this: "What other projects and ideas are you looking at to improve your productivity/results?"

A "Going with the herd" person usually doesn't have any other projects on the go. "Oh, I was just looking to see whether it made sense to consider Macintosh in this budget cycle." That's a dead end discussion, they have no motivation, no goal, no reason to zig while the herd zags.

Whereas a "Herd thither, me hither" person has a completely different answer: "For this new division, we need to cut the turnaround on proposal generation. So we're looking at Macintosh for desktop publishing, but we're also talking to Xeros about their Office Automation, and we're considering opening a new office closer to our customers, and..."

The "Herd thither, me hither" person is committed to doing new things, they're just trying to figure out *which* new things make the most sense.

So the easy question to ask is this: "Are you trying to figure out *whether* to change? Or trying to figure out *which change to make*?"

### CoffeeScript vs. JavaScript? Or vs ClojureScript?

That same question works just as well for programming today as it did for Macintoshes in 1992. If someone asks "Why CoffeeScript," qualify them:

> Do you mean "Why CoffeeScript instead of JavaScript?"" Or do you mean, "Why CoffeeScript instead of ClojureScript, Dart, TypeScript, or Pajamas?"

If someone is asking about (or writing an essay about) CoffeeScript vs. JavaScript, that's the same thing as Macintosh vs Windows. It's all an elaborate rationalization for going with the herd. But if they're looking at CoffeeScript vs. TypeScript, they've already committed to "Herd thither, me hither." You know they have a sincere investment in the questions they're asking and the quality of the answers they come up with.

And yeah, sometimes a "Herd thither, me hither" person will hate significant whitespace. Or insist on a compiled, type-safe language. Maybe they have excellent reasons for disliking CoffeeScript.

But if the argument is CoffeeScript vs JavaScript, you might as well be arguing Macintosh IIfx vs. Compaq 486. The outcome has been decided in advance:

They're going where the herd goes.
