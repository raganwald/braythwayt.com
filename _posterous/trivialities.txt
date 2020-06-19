## Trivialities

> Many programmers will think, when starting a project like an IDE, that implementing an incremental parser and code completion for your language is 80% of the effort of making a good IDE. In reality all the boring user interface crap, portability, build system integration, debugger integration, version control integration, documentation, etc will take way more time to get right.---[anttirt](http://www.reddit.com/user/anttirt)

In many projects, software developers figure that 80% of the job is the "rocket science" of designing and building the core engine (often expressed model logics in monolithic MVC web applications), because it's the most intellectually demanding part of the work. The remaining "20%" is often hand waved as "trivial," requiring little in the way of innovation and carrying with it little or no technical uncertainty. Estimating that the project will break down 80-20 between the rocket science and the trivial is a mistake.

[![Penny-pile-24672](images/penny-pile-24672_jpg_scaled_500.jpg)](http://posterous.com/getfile/files.posterous.com/raganwald/FnebzlACakxjQNkHVr9jL0TmacJrCdp1NeDA9YBsnnVDfDX5Ze4K5HGx0RRj/penny-pile-24672.jpg)

_("Trivial" is programmer slang for "I understand what to do and I'm ignoring how much time it will take to do it," much as one might say that adding two large numbers by representing them as piles of pennies, pushing them into one pile, and then counting the pennies is a "trivial" exercise. Trivial exercises are not necessarily swift exercises. Furthermore, like most people, programmers are often wrong about whether an exercise is trivial when it is outside of their area of expertise. Things a programmer claims are "trivial" can be mission critical and require domain-specific expertise to get right.)_

To correct such estimates, it helps me to think about a sample project. Consider a five month project involving five people. Will the engine really require four of those people full-time for the duration of the project, and one person to do everything else? Or the entire team to work on the engine for four months, and then do everything else in the last month?

It seems far more realistic to think of four members of the team working on the engine for the first month while one works on everything else, and thereafter perhaps one person is the specialist who makes changes or adds features to the engine for the remaining four months while four people work on everything else. That's eight person-months on the engine and seventeen person-months on everything else. Or to put it another way, the "trivial" stuff will take more than twice as much time as the "rocket science" to complete.

This is a completely fictional example, but you ought to be able to look at your existing projects and see similar patterns: The rocket science is the minority of a project, not the majority. That doesn't mean it's not important, just that we shouldn't be blinded by it into thinking that it will dominate the time it takes to finish things.

[Permalink](http://raganwald.posterous.com/trivialities)
