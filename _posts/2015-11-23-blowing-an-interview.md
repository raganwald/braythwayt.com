---
title: "What I Learned from Blowing An Interview"
layout: default
---

### background: the interview

Some time ago, I was a development manager with 23 reports spread over four teams. When I joined the company, they had already made the transition from "smart people in a room" to having a repeatable process. And they had been able to grow from a pair of Waterloo graduates to about forty engineers, half of whom were in my group. After a series of embarrassing schedule SNAFUs, the company had doubled down on process, instituting rigid Big Design Up Front and scheduling weekly reviews of the ubiquitous waterfall GANTT charts. This had helped, but the schedule kept slipping.

I had joined to lead a small team, and I brought a different tool, Agile, to the table. After my small team had hit several targets in a row, I was promoted to manage four teams, and with the new approach, the group hit its ship date for the very first time.

I was well-regarded within the company, and happy. However, a friend worked for a startup with excellent prospects, and he convinced me that I ought to fly down to Cupertino and interview for the VP of Engineering role. They were growing like crazy, and needed to go beyond "a bunch of smart people in a room." I'd be the most senior non-founder, and it would mean a chance to build the engineering organization.

I packed my discs and cleats[^apple-tandem], and flew down for a day of meetings. The technical interviews went extremely well. I wowed them by using the `explicit` keyword in a C++ coding test, I cracked a few logic puzzles, I found some cycles in some graphs, and otherwise waved the signal that I was a good cultural fit for the technical norms of the time.

[^apple-tandem]: There used to be a regular lunchtime game of pickup Ultimate at the Cupertino library. it was informally known as the "Apple-Tandem" game, presumably because it was founded by engineers from those respective companies. That being said, I never actually met anyone who professed to be from Apple or Tandem.

I also met with the founders, and we were joined by a representative from the lead investor. After some talk about my background, we turned to the subject of engineering process and culture, my chance to display the value I could bring them. I was enthusiastic and confident as I expounded on my theories about iterative development, the problems with the "glass case plan" anti-pattern, the ways in which software architecture could remove the dependencies that made waterfall process seem necessary, and much more.

When the interviews concluded, I was certain that I had demonstrated why I was the ideal candidate for the role. I had the experience, the knowledge, and the track record to demonstrate my value. Not to mention my friend pulling for me. Unfortunately, I did not get an offer.

Instead, I received a polite "thank you, but no thank you" letter.

[![failure](/assets/images/failure.jpg)](https://www.flickr.com/photos/jeffdjevdet/17134243011)

### the bad news

I contacted my friend. What went wrong? He sighed. "The founders thought you were too theoretical. They got the sense you would be a great coach or evangelist, but lacked the hands-on attitude they were looking for to actually build a team up."

I was astounded. Hadn't I written a metric fuck-ton of code at my current company? Didn't I run multiple development meetings, train tech leads on the process, and do an enormous amount of reporting and prediction? Wasn't I working with burn-downs, buffer delats, and other metrics every day?

"Sorry," he said, "I guess that just didn't come across."

I went through all five stages of grief in one conversation: Anger, Denial, Bargaining, Depression, and finally, Acceptance. **I blew it**. Okay, I had lost this chance. But what could I learn for the next time?

This is where having a warm referral is so valuable. My friend cared about me and had already talked to the founders at length about my performance, and he shared his notes with me.

### the feedback

Throughout the meeting, I had repeatedly moved from the specific to the abstract. One of the partners gave my friend an example: When she asked me to describe the specific tools I was using, she wanted to hear about how I used burn-downs, what use I made of metrics like available buffer, whether I insisted on daily standups, and so on.

But when asked, I had started with an example of a tool, and then veered off to discuss how the tool supported an underlying principle of agility, then gone from there to talk about cultural changes and their effect on recruiting. These things matter in the grand scheme of things, but they weren't what she was trying to judge when she asked me to describe a tool.

Another partner had asked me to give an example of a difficult conversation, such as letting someone go. I had dutifully recounted the tale of transferring an engineer out of the group after repeated refusals to participate in the process. But while the partner wanted to hear about the specific personality conflicts involved and how I had dealt with them, I once again used the story as a launching point for talking about culture clashes and  techniques for communicating with people.

He didn't want to hear about the general ideas, he wanted to hear what I actually did.

There were a few more examples, but they all pointed to a problem with the way I communicated with the founders, and I went off and did some hard thinking.

It's tempting to say that I was not listening, that I was not paying attention to the questions I was being asked. But even that is an unnecessary generalization. The specific problem was that I was speaking of broad patterns and forces, when my interlocutors were asking about specific, tangible incidents and tools.

[![Realization](/assets/images/realization.jpg)](https://www.flickr.com/photos/wonderlane/3613473396)

### the realization

Generalizing has an important role in thinking. When we see a pattern, we look for a root cause. When we find a specific solution to a specific problem, we try to understand how the solution can be adapted to similar problems. This is how we discover and perfect tools of all kinds.

But that being said, the value of a general insight or pattern is removed from reality. From an engineering perspective, knowing about the effect of gravity on the relative passage of time is only potential value. Designing a series of clocks that stay synchronized even when one is on the surface of the Earth and the others are in geostationary orbit above the Earth realizes the value and makes GPS possible.

Likewise, blogging or writing books about software development is necessarily removed from software development. Patterns, architectures, idioms, and algorithms are potential value. It's only by applying the ideas that we realize the value. The same goes for creating infrastructure like operating systems, text editors, programming languages, frameworks, and libraries.

These are wonderful works, but their value isn't realized until somebody uses them to create something.

For various social reasons, we often attach a lot of prestige to working with abstract ideas. It's considered lowly grunt work to write the code that creates values for people, while "architects" and "thought leaders" and "framework authors" hog the lion's share of the praise. There's a hand-wavy idea that working at a "higher level" creates leverage, that writing a jQuery or a Ruby on Rails or a Python or a Linux makes many other programmers more efficient, and they in turn make so much more value for the world than you would have made had you built something other than a tool.

Sometimes this is true. Sometimes, it isn't. The important thing is that **general, abstract knowledge is not the same thing as applied knowledge**.

[![Learn](/assets/images/learn.jpg)](https://www.flickr.com/photos/jakerust/16846023595)

### the specific lessons I learned

Understanding that "general, abstract knowledge is not the same thing as applied knowledge" can help us have better conversations of all kinds:

- When being interviewed, we must make sure that when asked to speak in specifics, *we answer in specifics*. It is ok to also mention some general principles and ideas, but we cannot do so at the expense of answering the question being asked: To do so is to do a disservice to the persons asking us specific questions.
- When asking other people questions, we should think about *both* specifics and generalities, ask questions designed to elicit specificities, and ask questions designed to elicit generalities.

The lesson I learned from my interview has informed my interviews and conversations ever since. When people ask me about specific things I've done, or specific things I will do, I make sure to answer in specifics. I may *add context* by discussing the general reasoning behind the specifics, but I don't neglect the specifics.

Likewise, when talking to people about their experience or their plans, I make sure to ask about both generalities and specifics. They both matter. For example, when asking someone about their programming techniques, it's important that they demonstrate the ability to use common patterns and idioms. And it's important that they understand the underlying ideas and motivations behind the idioms.

Understanding that "general, abstract knowledge is not the same thing as applied knowledge" also helps me with my own thinking and writing. When I wrote the book [JavaScript Allongé][ja], I used a pattern where I'd talk about an idea, then introduce some "recipes" that applied the idea in a more practical way. There are some ideas I found very interesting that didn't translate into useful recipes—and I dropped them from the book.

Specific examples and abstract ideas have a reinforcing relationship. General ideas *explain* specific patterns and idioms. And specific patterns serves as *examples* of general ideas. They belong together, provided they are used in the appropriate ratio.

[ja]: https://leanpub.com/javascriptallongesix

### my specific advice

Failing so spectacularly in an interview shook me to my core. But it taught me a valuable lesson, and one that I have shared with you:

 > Understand the distinction between *specific, applied experience* and *general, abstract knowledge*.

 > When talking with others, be aware of when they want to understand the specifics, and when they want to understand the general ideas. When explaining specifics, use the general only to support your ideas. And when explaining  the ideas, use specifics only as examples to illustrate the principles.

 > Working in the abstract can provide a lot of leverage, but that depends upon a number of factors like adoption of your ideas by others. Working in the specific is when value is realized.

 ---
