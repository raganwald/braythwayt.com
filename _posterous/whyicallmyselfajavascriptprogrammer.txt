## Why I call myself a Javascript Programmer

[Aaron Griffin](http://phraktured.net/about.html) has written [an excellent rant](https://bbs.archlinux.org/viewtopic.php?pid=147321#p147321) on the subject of frameworks and their habit of abstracting the programmer away from the prime business of programming. To summarize his main argument, when you become a "Rails Programmer," you are presented with easy to understand but non-portable abstractions for easy to understand and perfectly portable things like HTTP or SQL. Rails knowledge is _not_ portable, so if you move on to work with a new framework, you have to throw your skills away. How does INNER JOIN work again?

I think there's a lot to Aaron's argument, and he makes it well, so I'll stop summarizing it and remind you to [read it for yourself](https://bbs.archlinux.org/viewtopic.php?pid=147321#p147321).

[![Cabinets by Waring Woodworking](images/342012662_3449e103c4.jpg)](http://www.flickr.com/photos/benfrantzdale/342012662/)

But on to the side-show. Along the way, he says:

> Many many many many 'developers' out there throw these stupid titles on themselves - "PHP Programmer" or "Ruby Developer" or "C++ Developer" - it's all nonsense.  A programming language is a tool.  Each one fits it's own problem-set.  Calling oneself a "C Programmer" is like saying you're a "Hammer Carpenter" who just uses a hammer.  We all know how dumb that sounds.

I shall say, "This wrong-headed argument is glaringly out of place amongst all the other excellent points." I think the scale is all wrong, the amount of knowledge and experience implied by the expression "C Programmer" is not on the same order of magnitude as the expression "Hammer Carpenter." If we look at things of similar scale, we find titles associated with the tools of the trade : Fork-lift operator, Shuttle Pilot, CNC Machine Operator.

But that's a minor disagreement. I agree with what Aaron's trying to say about confusing the tool with the task. Being a tool expert instead of a task expert is removing yourself from the work. Being an expert in the abstraction makes you more efficient when working within the limitations of the tool, but it cripples you when you need to step outside of the abstraction's affordances, or worse, when you must use another abstraction.

If you don't understand relational databases and SQL (the de-facto standard abstraction), moving from ActiveRecord to LINQ is painful, because you are trying to map LINQ to ActiveRecord instead of mapping LINQ to SQL. Aaron's right about that. 

A few paragraphs back I took issue with comparing the expression "C Programmer" to "Hammer Carpenter." I have another issue with that, but this issue brings me closer to Aaron's perspective. I don't think programming languages are tools, I think they're notations for thought. If there's a comparison to be made with carpentry, I'd say that a language is a **medium** for construction of programming.

C is not like a hammer, C is like wood. So a C Programmer is a wood-worker. Knowing all about the subtle details of working with wood isn't especially portable to working with cables that carry electricity or layers of carbon fibre or blocks of solid aluminum. But it's still sufficient for the construction of a sorts of wooden things.

The tools we use on the medium are things like IDEs. If you call yourself an "Eclipse Programmer" and are unable to build a Java program without access to its autocompletion and auto-refactoring and have no clue how to use git or subversion or whatever without its plugins... Well you might be getting close to becoming a Hammer Carpenter.

That's the way I see it. Thanks, Aaron. Great rant.

[Permalink](http://raganwald.posterous.com/why-i-call-myself-a-javascript-programmer)
