---
title: "Architectures Aren't Frameworks"
layout: default
tags: [noindex]
---

[![Howl's Moving Castle](/assets/images/howl.png)](https://www.flickr.com/photos/zmz125000/22499638891)

One of the big questions to answer before starting any programming application is: *Should we use a framework?*

An argument I've heard in favour of frameworks is: "If you don't explicitly choose a framework, you will end up with your own proprietary in-house framework." Or as nerds of a certain age might joke:

> Every sufficiently complicated in-house application contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of a framework.

Having your own ad hoc, informally-specified, bug-ridden, slow implementation of half of a framework is not something to be fervently desired in most cases, but I'd like to explain why I don't feel this argument lines up with my experience.

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

### what if you don't use a framework?

If you don't use a framework, don't you always end up with a framework? Don't all applications have a collection of libraries that interoperate well, an architecture, and mechanism for wiring your code to the libraries? So therefore, don't you always get a framework, but sometimes you get the pain and suffering of libraries that don't interoperate well, or a poor architecture?

I don't think this is the case. When you set out to write an application without a framework, you certainly need libraries (It's quite rare to build most of an application entirely bespoke). And yes, you may need to do some research to discover which ones work best in concert. That being said, there are certain well-known collections of complementary libraries, and some libraries consist of components that are all written to work together, like [Backbone.js](https://en.wikipedia.org/wiki/Backbone.js).

You'll also need an architecture, but it's not like you need to invent one from scratch, and that nobody else will understand it. If you have Models, Views, Controllers, and View Models, everyone knows what you're doing, why, and how to work with it. We've had variations on MVC since at least 1982. The same goes for a hexagonal or other architecture: There are well-known patterns of architecture for organizing applications, and choosing one that programmers will understand is hardly the most daunting challenge you will face.

---

### notes
