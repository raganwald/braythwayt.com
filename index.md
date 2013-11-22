---
title: Reginald Braithwaite
layout: default
---

> At either end of the educational spectrum, there lies a Hacker Class.

Reg “raganwald” Braithwaite is proof that somewhere, a village is missing its idiot. Either that, or a combinatory forest is missing its Idiot Bird, nobody is really sure. His interests include constructing surreal numbers, deconstructing hopelessly egocentric nulls, and celebrating the joy of programming.

Contact: [reg@braythwayt.com](mailto:reg@braythwayt.com) and [@raganwald](https://twitter.com/raganwald)

### recent non-technical essays

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

### other writing

* [code](http://github.com/raganwald) / [more code](http://github.com/raganwald-deprecated)
* [technical essays](http://raganwald.com)
* [books](http://leanpub.com/u/raganwald)

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

### and finally...

* [slide decks](http://lanyrd.com/profile/raganwald/slides/)
* [conferences](http://lanyrd.com/profile/raganwald/)