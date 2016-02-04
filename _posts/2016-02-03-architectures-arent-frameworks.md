---
title: "Architectures Aren't Frameworks"
layout: default
tags: [noindex]
---

[![Howl's Moving Castle](/assets/images/howl-4.png)](https://www.flickr.com/photos/zmz125000/22499638891)

You may have encountered this variation on [Greenspun's Tenth Rule](https://en.wikipedia.org/wiki/Greenspun's_tenth_rule):

> Every sufficiently complicated in-house application contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of a framework.

The thinking behind this quip is that if you're setting out to write a non-trivial application, you'll wind up with a framework any ways, so why not explicitly pick a good one up front rather than accidentally creating your own your own ad hoc, informally-specified, bug-ridden, slow implementation of half of a framework in an effort to do without?

I believe that while writing an application without a framework sometimes does result in writing your own framework f indifferent (or worse) quality, it needn't. We just need to be aware of what a framework provides, and if we choose not to use a famework, we should consciously choose to do without some of what it provides.

[![Porco Rosso](/assets/images/porco-rosso-16.jpg)](https://www.flickr.com/photos/zmz125000/22300206739)

### what is a framework?

In contemporary programming terms, a framework contains--at a minimum--a collection of libraries that interoperate well, an architecture for organizing the libraries and the code you write, and a mechanism for wiring up your code to the libraries provided by the framework. Other tools such as build pipelines may also be provided.

In addition to these things we can observe, framework architectures typically are organized around the framework doing most of the work, and calling out to your code where necessary. In [Ruby on Rails](https://en.wikipedia.org/wiki/Ruby_on_Rails), you write controllers, and Rails invokes your controllers. Everything you write conforms to an API provided by the framework and is, in essence, subservient to its design.

[Ruby on Rails]: https://en.wikipedia.org/wiki/Ruby_on_Rails

The benefits of choosing a good framework include an assurance that the libraries provided all work together seamlessly, and a standard way to do many things. When a large number of people embrace the framework, you benefit to some degree from having a consistent way to solve certain problems.[^folder]

[^folder]: For example, in [Rails][Ruby on Rails], controller class files go in the "controllers" folder, which is inside the "app" folder by default. Since almost all Rails apps are organized this way, when a Rails programmer starts work on a new app, they know exactly where to find controller files.

So to summarize, the important things about a framework are that it is:

- A collection of libraries;
- That interoperate well;
- An architecture for organizing code;
- A mechanism for wiring your code to the framework;
- Where the framework is in control.

[![Porco Rosso](/assets/images/porco-rosso-7.jpg)](https://www.flickr.com/photos/zmz125000/22473736582)

### what if you don't use a framework?

If you don't use a framework, don't you always end up with a framework? Won't you wind up building "An ad hoc, informally-specified, bug-ridden, slow implementation of half of a framework?"

Don't all applications have a collection of libraries that interoperate well, an architecture, and mechanism for wiring your code to the libraries? So therefore, don't you always get a framework, but sometimes you get the pain and suffering of libraries that don't interoperate well, or a poor architecture?

I don't think this is the case. When you set out to write an application without a framework, you certainly need libraries (It's quite rare to build most of an application entirely bespoke). And yes, you may need to do some research to discover which ones work best in concert. That being said, there are certain well-known collections of complementary libraries, and some libraries consist of components that are all written to work together, like [Backbone.js](https://en.wikipedia.org/wiki/Backbone.js).

You'll also need an architecture, but it's not like you need to invent one from scratch, and that nobody else will understand it. If you have Models, Views, Controllers, and View Models, everyone knows what you're doing, why, and how to work with it. We've had variations on MVC since at least 1982. The same goes for a hexagonal or other architecture: There are well-known patterns of architecture for organizing applications, and choosing one that programmers will understand is hardly the most daunting challenge you will face.

And naturally, your code interoperates cleanly with the libraries and everything else. After all, you're writing it! By definition it works with everything.

But have you would up writing your own framework? Or not?.

[![Porco Rosso](/assets/images/porco-rosso-5.jpg)](https://www.flickr.com/photos/zmz125000/22473645012)

### so far, they sound the same

Up to this point, what you get from working with a framework sounds just like what you get writing an app with libraries. The differences are ostensibly that with a framework, a lot of decisions are made for you, and with libraries, you get to do some awesome wonderful customization that most people don't need, so why bother?

There is merit to this. Let's forget about the effort of writing the code for a moment. There are decisions that matter, and decisions that don't. One of the benefits of a framework is that it makes a lot of decisions for you. If those decisions don't matter, you've saved yourself a tremendous amount of time by not having to think about them. If you're on a team, you've saved the team a tremendous amount of time by not debating them.

This is the rationale behind [Python] having significant whitespace: It is never a good idea to spend time arguing about how to indent code, and whether the braces go on one line or the next. So having a language enforce one right way to do it means you spend all your time thinking about things that matter.

[Python]: https://en.wikipedia.org/wiki/Python_(programming_language)

So in what way is writing your own application with libraries not the same thing as writing your own ad-hoc framework? How is it different?

[![Porco Rosso](/assets/images/porco-rosso-9.jpg)](https://www.flickr.com/photos/zmz125000/22299416898)

### what makes a framework, a framework?

Let's back up and consider how frameworks are made. There are two ways to make a framework: The academic way, and the practical way. In the academic way, you sit down and imagine what application developers need, then set out to make the OneTrueAwesomeFrameworkToRuleThemAll, In the practical way, you write an application, then *extract* the framework from what you have written.

I want to draw attention to the latter method, because from it we can devine whether writing an application necessarily includes writing an ad hoc framework. let's say you write an online store. If you could go through the application and delete any references to your particular store, would what you have left be a framework?

In most cases, the answer is **no**. Extracting a framework from an app starts with removing things specific to the app. But then you have to add stuff. Many of the things you remove, like classes and workflows specific to your business, have to be refactored so that other users of the framework can put their own stuff in. Things must be abstracted. A controller might be one class in your application, but you would need to extract common functionality from it into an abstract superclass to make it work in a framework.

Methods might need to be teased apart and parameterized, decorated, or turned into template methods to permit reuse. Very few applications actually have a working framework inside them, because they weren't written to be generic web applications, or even generic online stores. They were written to do one thing and do that one thing well.

Whereas a framework is--by design--written to assist people do many different things. It is full of extra abstractions and teased apart indirections. That confers a benefit when you are writing an app with a framework. But it exacts a toll if you write your own app to include your own framework, because your app no longer does one thing well. Not only does it include the kitchen sink, but it includes all the indirections necessary for using the framework for kitchens, even if you are building a bedroom.

If your app includes all those indirections and abstractions, you've written your own framework. If not, you haven't.

[![Porco Rosso](/assets/images/porco-rosso-2.jpg)](https://www.flickr.com/photos/zmz125000/22498181971)

### so what's better?

It's a tradeoff: You win if you build an app using a framework, for all the reasons noted: a curated set of libraries, a standard way to do things understood by a community, and you need never waste time worrying about making decisions that don't matter.

You also win if you write an application using good libraries and well-known architectural patterns. You win if you make it do one thing and do that one thing well. While you don't have quite the same ease of choosing libraries, things are still done in a well-understood way, and while you make a number of decisions, you also eliminate a massive amount of indirection and abstraction.

Your app can be simpler and cleaner without a framework.

[![Porco Rosso](/assets/images/valley-of-the-wind-26.jpg)](https://www.flickr.com/photos/zmz125000/22486577991)

### the dark side of application development

So why the warnings about writing ad hoc, informally-specified, bug-ridden, slow implementation of half of a framework? The answer is, *Because of the [inner platform effect]*. Whether intentionally or through overzealously copying the abstractions and APIs of frameworks, many applications end up with a framework inside them.

They thus get all the disadvantages of a framework--like extra levels of indirection and unnecessary customizability--coupled with all the disadvantages of writing your own app--like needing to write more code, make more decisions, and not have a community standard way to do anything.

[inner platform effect]: https://en.wikipedia.org/wiki/Inner-platform_effect

[![Porco Rosso](/assets/images/valley-of-the-wind-31.jpg)](https://www.flickr.com/photos/zmz125000/22475579055)

### success in application development

The key to success in writing an application without a framework *is to write an application without a framework*.

Have libraries. Have an architecture. Wire things together. But strive to keep it lean and focused. Practice YAGNI ruthlessly and view with deep prejudice any extra abstraction or customizability "just in case we need it."

Do not embrace wild convention-over-configuration in a custom app. Do not build elaborate class hierarchies just so that a new widget can be written in one line of code.

Just write your app.

---

### notes
