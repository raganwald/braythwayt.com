---
title: Reginald Braithwaite
layout: default
---

[![copyright (c) 2008 photojunkie](/assets/images/reg_at_meshu.png)](http://www.flickr.com/photos/photojunkie/2510690700)

> At either end of the educational spectrum, there lies a Hacker Class.

Reg “raganwald” Braithwaite is proof that somewhere, a village is missing its idiot. Either that, or a combinatory forest is missing its Idiot Bird, nobody is really sure. His interests include constructing surreal numbers, deconstructing hopelessly egocentric nulls, and celebrating the joy of programming.

### about

* [reg@braythwayt.com](mailto:reg@braythwayt.com)
* [technical essays](http://raganwald.com)
* [résumé](/assets/reginald/RegBraithwaite20130425.pdf)
* [books](http://leanpub.com/u/raganwald)
* [photos](http://www.flickr.com/photos/raganwald/)
* [slide decks](http://lanyrd.com/profile/raganwald/slides/)
* [conferences](http://lanyrd.com/profile/raganwald/)
* [code](http://github.com/raganwald) / [more code](http://github.com/raganwald-deprecated)

### essays

<div class="related">
  <ul>
    {% for post in site.posts %}
      {% unless post.categories contains "posterous" or post.categories contains "homoiconic"or post.categories contains "noindex" or post.tags contains "noindex" %}
        <li>
    <a href="{{ post.url }}">{{ post.title }}</a> (<span>{{ post.date | date: "%B %e, %Y" }}</span>)
        </li>
      {% endunless %}
    {% endfor %}
  </ul>
</div>

### selected older essays

<div class="related">
  <ul>
    {% for post in site.categories.homoiconic %}
        <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endfor %}
  </ul>
</div>

<div class="related">
  <ul>
    {% for post in site.categories.posterous %}
        <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endfor %}
  </ul>
</div>