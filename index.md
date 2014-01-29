---
title: Reginald Braithwaite
layout: default
---

> At either end of the educational spectrum, there lies a Hacker Class.

Reg “[raganwald](http://raganwald.com)” Braithwaite is proof that somewhere, a village is missing its idiot. Either that, or a combinatory forest is missing its Idiot Bird, nobody is really sure. His interests include constructing surreal numbers, deconstructing hopelessly egocentric nulls, and celebrating the joy of programming.

### about

- He writes a hands-on technical blog called [raganwald.com](http://raganwald.com).
- He works at [GitHub](https://github.com/raganwald).
- He has written a few [books](http://leanpub.com/u/raganwald).
- He speaks at [conferences](http://lanyrd.com/profile/raganwald/).

Contact: [reg@braythwayt.com](mailto:reg@braythwayt.com) and [@raganwald](https://twitter.com/raganwald).

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
