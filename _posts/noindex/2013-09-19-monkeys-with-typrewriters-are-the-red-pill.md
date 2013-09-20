---
layout: default
title: Monkeys with Typewriters are the Red Pill
tags: [noindex]
---

*This is a work-in-progress, meaning it's both "unfinished" and "unpolished." I'm working out some of the ideas as I write, and the essay may change dramatically along the way.*

*So for now, please don't post it to Hacker News or Reddit until it's "1.0." I can live with people criticizing an unfinished essay, but it does deprive us of the feedback we'd get if we waited until the essay was "done."*

### preamble

For the most part, I avoid speaking at conferences. I'm shy and suffer from [Impostor Syndrome][^is]. Watching talks from accomplished people like Sandi Metz or Charles Nutter, I feel very intimidated. I have a real fear that someone will stand up and point out that I have nothing to say and I'm just babbling feel-good platitudes.

[![Nordic Ruby](http://farm4.staticflickr.com/3794/9026031742_931f2c5760_z.jpg)](http://www.flickr.com/photos/elabsse/9026031742/)

[^is]: The **impostor syndrome**, sometimes called **impostor phenomenon** or **fraud syndrome**, is a psychological phenomenon in which people are unable to internalize their accomplishments. Despite external evidence of their competence, those with the syndrome remain convinced that they are frauds and do not deserve the success they have achieved. Proof of success is dismissed as luck, timing, or as a result of deceiving others into thinking they are more intelligent and competent than they believe themselves to be.

The last two conferences were particularly stressful. At [Nordic Ruby](http://braythwayt.com/2013/06/18/nordic-ruby.html), I talked about the possibility that Ruby is sliding into irrelevance. Although the language looks healthy, it is in the same position as Microsoft a few years ago: Hamstrung by its own success and ripe to be disrupted by something taking a "Worse is Better" approach.

[![BaRuCo](https://pbs.twimg.com/media/BUNtBK0IQAA9uqQ.jpg:large)](https://twitter.com/schneems/status/379266660773146624/photo/1)

At [BaRuCo](http://www.baruco.org), I went further and questioned whether programming-as-it-is-spoke is also becoming irrelvant. Or more specifically, why the kinds of things that fascinate me--like combinators and monadic style--could be irrelevant.

There's something bugging me, something under my skin. It's a feeling that we--Ruby programmers, JavaScript programmers, ___ programmers--are paying attention to the wrong things. We're optimizing for *x* while ignoring the fact that *y* is what made us successful in the first place.

I'm going to try to explain myself, in the hope that it will help me collect my thoughts into a coherent argument. I highly doubt I'll end up with a well-organized essay where the ideas hang off a "spine," and are presented in just the right order and depth to pursude the reader.

## monkeys with typewriters

Imagine that we have  lots of monkeys, lots and lots and LOTS of monkeys. And typewriters. Lots and lots of typewriters! You know how it goes, they randomly bash on the typewriters, producing page after page of random text. 

The usual argument is that given enough time, they will produce the works of Phil Dick and/or Antoni Gaudi. And the music of Mozart. And a patent application for a FTL drive. And everything else that has ever been written or ever will be written.

It's an important exercise to recognize that the number of monkeys needed to randomly recreate, say, a page of Phil Dick's short story "Second Variety" is intractably huge. But as huge as that number may be, it's *dwarfed* by the size of the real problem with putting monkeys to work generating ideas: The good stuff is buried by the crap.

[![Troop](http://farm7.staticflickr.com/6024/5888927678_9b2c9b8e14_b.jpg)](http://www.flickr.com/photos/doug88888/5888927678/)

**Generating the works of Phil Dick isn't the problem, the problem is *recognizing* the works of Phil Dick amongst the pages of dreck.**

After all, for every page containing:

> Furuike ya 

> kawazu tobikomu 

> mizu no oto--basho

There are millions, or even billions, of pages describing baseball games, pages recounting acrimonious exchanges of tweets between trolls and their victims, and everything else that could fit on a page. There're even pages containing code that is "not even wrong," such as:

{% highlight ruby %}
def andand (p = nil)
  if self
    if block_given?
      yield(self)
    elsif p
      p.to_proc.call(self)
    else
      self
    end
  else
    if block_given? or p
      self
    else
      MockReturningMe.new(self)
    end
  end 
end
{% endhighlight %}

This is the problem: **Recognizing the good stuff**.

Sure, we don't *really* have enough monkeys, but the problem of the monkeys isn't really *interesting*. We can breed more monkeys, we can make smarter monkeys, we can make faster typewriters. Just ask Charles Nutter, if your typewriter is holding you back, he has one that isn't broken you can use for free. Inevitably, we get more and more monkey-output with every passing year whether we like it or not.

But no matter what we do, we still can't sort the good from the bad, the `andand` from the `try`. Think of it this way: This is the "spam vs. ham" problem, a/k/a [Document Classification](https://en.wikipedia.org/wiki/Document_classification).

Classification is the problem, not generation.

## the red pill

You know the meme: The "red pill" is the one that tells us uncomfortable truths, but without facing the truth, we are slaves to our illusions. Only by facing the truth can we work to set ourselves free. The red pill is a real Faustian Bargain. If you take the blue pill, you are a slave, but a happy slave. Once you take the red pill, you know you are a slave, and now you must sacrifice and hurt and work to earn true freedom.

![Morpheus](http://www.expoweekly.com/site/wp-content/uploads/2010/03/Morpheus-Red-or-Blue-Pill-the-matrix-1957140-500-568-440x500.jpg)

To me, the blue pill represents the idea that individual monkeys are really special, and writing great books and great software and changing the world is all about smarter monkeys and faster typewriters.

Whereas the "red pill" is the thought that we're just monkeys with typewriters, and that rather thah trying to breed smarter monkeys, we should simply organize ourselves around maximizing the number of moneys available to work in a problem.

Think about some of the ideas we seem to take for granted:

* Some programmers are 10x or 100x more productive than others, and that matters.
* Some languages are more expressive or powerul or elegant than others, and that matters.
* Some code architectures are 10x or 100x less encumbered by tech debt than others, and that matters.

These are just examples. Our cultural assumptions--both stated and unstated--are that it really matters to use fewer and smarter monkeys. And that it really matters to use faster, more powerful typewriters. I've met people who say that the most important feature of a programming language is that it support static code analysis so that editors can do fancy automatic refactoring, In oher words... Typewriting matters to them, greatly.

But the red pill is that we're monkeys with typewriters, and that while some of those premises may be true, none of them matter as much as recognizing good work.

Having taken the red pill, I fear that:

* Some programmers are 10x or 100x more productive than others, but that doesn't really matter.
* Some languages are more expressive or powerul or elegant than others, but that doesn't really matter.
* Some code architectures are 10x or 100x less encumbered by tech debt than others, but that doesn't really matter.

This is painful to contemplate. I've been blogging since 2004, and my consistent message has been that smarter monkeys matter. My consistent message has been that better typewriters matter. If they don't matter, *Maybe I don't matter*.

### ruby-red

This sounds disheartening. But let's step back. Why do I think that programming is monkeys with typewriters 

*...MORE TO COME...*

---

(this is a work-in-progress. Please don't post to HN, Reddit, &c.)