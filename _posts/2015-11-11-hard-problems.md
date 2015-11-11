---
title: "Names are a problem worth solving"
layout: default
---

> "There are two hard problems in Computer Science: Cache invalidation, and naming things."—[Phil Karlton](http://karlton.hamilton.com)

Naming things is a hard problem, because names are part of the *user interface* for code. Good user interface design is difficult. For example, certain shapes and colours have particular meanings, and those meanings vary from culture to culture.

If you mean a shape or colour to be interpreted in one way, but it means something else to your user, your user interface is distracting or confusing. That's no different than writing confusing code: Even if it "works," it is not fit for the purpose of communicating its intent clearly.

Names are like this as well. There are a bewildering set of considerations when choosing names for things. For example, to "root" can mean one thing in security jargon, and quite another in Aussie slang.

Choosing names that clearly communicate their intent without distraction is part of the job of designing software, whether those names appear overtly in the user interface, appear in the documentation, are used by the API, or appear in the source code that programmers review.

Choosing good names isn't a distraction from writing software, it's part of the job of writing software.

There are, of course, many considerations to balance when making such decisions. Names like `kill`, `abort`, `trigger`, `master`, and `slave` have widely recognized meanings within the technology world, and while they will probably change, that change may take generations.

But other choices drag considerably less baggage into the decision. When writing new software, with new APIs, and new documentation, we have the ability to choose names that communicate our intent clearly without sidetracking our readers or community.

When we write code, we don't write:

```
for (let blimpFactory = 0; blimpFactory < fartSmell.length; blimpFactory) {
    // ...
}
```

We know that the thing we're trying to say with our code will be overshadowed by the distraction we've caused with names like `blimpFactory` and `fartSmell`. Good writing, they say, is like a windowpane: It communicates the idea without drawing attention to itself.

And so it is with good names: They communicate the idea without invoking thoughts or feelings in the reader that are not central to the idea being expressed.

It turns out, doing this well is extremely difficult. And so it is that we often try a word, discover it provokes people in an unintended way, and go back and change it. We don't just write, we rewrite.

This is ok, this is healthy. This is what we expect when we set out to solve one of the two hardest problems in Computer Science.

And no, we don't expect it to be easy.
