## It's just Math!

A typical week at the office:

A client gives me some requirements. They might look like this: "Design a two-dimensional cellular automata such that we can create a self-replicating pattern." I'm a smart guy, maybe not as smart as [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann), but smart enough to come up with a 500 by 500 pattern in a 29-state automaton that works.

The customer has some feedback: "This is too complicated! Make it simpler." I go into the woodshed, and when I emerge, I have a [two-state CA with rules capable of hosting a self-replicating pattern](http://www.ericweisstein.com/encyclopedias/life/), just like [John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway). 

Do you think my client is happy? No. Here is what they say: "Your code has fallen into the [Turing Tar Pit](http://www.cs.yale.edu/homes/perlis-alan/quotes.html), where everything is possible, but nothing of interest is easy. Non-trivial patterns take forever to execute. I want it faster, much faster, super-linear."

[![Screen_shot_2012-02-19_at_3](images/Screen_Shot_2012-02-19_at_3_27_png_scaled_500.jpg)](http://getfile3.posterous.com/getfile/files.posterous.com/raganwald/pAzndRmrF8TaQEIlaKAjaHLuWQ5OhNTDdjI0Mun6bnjEbkwEzjJsdaHkfZrz/Screen_Shot_2012-02-19_at_3.27.png)

What!?

"I want it super-linear. Can you or can't you do that?"

Well, yes, maybe I can, I'll need to---

"What do you mean maybe? Look, this is a mathematics problem. Math is a formal science. You're supposed to be an expert. Well, look in your books of algorithms and data structures and figure out which combination will produce a super-linear implementation for me."

Umm, maybe, I'll get right on that---

"Yes indeed get right on that. I need it on Friday, ok?"

Well, not sure about Fri---

"What do you mean _not sure_? This is Math. It's a science. You're an expert. Do that thing that you do when you do so well. By Friday. How can there be uncertainty about having it ready on Friday?"

Well, it's not that simple, beca---

"Yes it **is** that simple, it's Math, not flipping coins and hoping they all come up heads. We're talking less than a thousand lines of code here, you're lucky I can wait until Friday."

Sure, when I figure out _which_ lines of code there will probably be fewer than a thousand, I just don't know which thousand they are yet.

"Harrumph, well, be in my office on Friday with the code or else!"

Hmmm.

**Ruminations**

You know, Computer Science is just like Mathematics, it's very black and white, fully determined. But _mathematicians _aren't, and neither are programmers. To an approximation, asking when a non-trivial program will be done is just like asking when a theorem will be proven.

**post scriptum**

While I'm not as smart as [Bill Gosper](https://en.wikipedia.org/wiki/Bill_Gosper), on Friday I deliver a [working super-linear implementation](http://recursiveuniver.se) based on Quad Trees. Unfortunately, it requires space proportional to the information complexity of the history of the pattern's evolution, and while it is an excellent performer for highly regular patterns, it crashes my computer for irregular methuselahs like the [rabbits](http://www.ericweisstein.com/encyclopedias/life/Rabbits.html).

Next week is going to be a doozy!

([discuss](http://news.ycombinator.com/item?id=3612540))

[Permalink](http://raganwald.posterous.com/its-just-math)
