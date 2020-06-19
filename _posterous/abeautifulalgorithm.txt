## A beautiful algorithm

The Earth is 4.54 billion years old.

That's 54.48 billion months. 1.66 trillion days. 39.84 trillion hours. 2.39 quadrillion minutes. 143.4 quadrillion seconds.

So.

Imagine that the Earth has just been born. You're bored waiting around for sentient beings to evolve and invent Hacker News for you to read, so you pass the time by playing [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life). You're an omniscient being, so instead of waiting for Bill Gosper to discover the Glider Gun, you lay it out using chequers, one per live "cell:"

![687474703a2f2f726167616e77616c](images/687474703a2f2f726167616e77616c.png)

Let's say you make one move per second. In the 143.4 quadrillion seconds it takes for the Earth to develop, for carbon-based life to evolve into sentient humans, and for one of those humans to write this short post, how many chequers will you need? In other words, what is the population of your game after 143.4 quadrillion generations?

Let's use [Cafe au Life](http://raganwald.github.com/cafeaulife/docs/cafeaulife.html) and find out:

raganwald@Reginald-Braithwaites-iMac[cafeaulife (master)⚡] coffee

coffee> gun = require('./lib/menagerie').gospers_glider_gun

coffee> gun.future_at_time(143400000000000000).population

23900000000000036

coffee> 

That is **ridiculous**. It takes a second or so for Bill Gosper's [HashLife](http://en.wikipedia.org/wiki/Hashlife) algorithm to leap one hundred and forty-three quadrillion generations into the future, even running JavaScript instead of a tightly optimized implementation written in C and assembler. HashLife is superlinear for patterns that contain regularity it can exploit.

It's stuff like this that keeps me interested in programming. No matter how "done" any one subject may seem, you never know when you'll run into a radical breakthrough that blows away your preconceived ideas about space, time, or complexity.

I stand by my assertion that I'm not young enough to know everything. Exploring this "beautiful algorithm" has been an eye-opener.

[Permalink](http://raganwald.posterous.com/a-beautiful-algorithm)
