---
title: Reginald Braithwaite
layout: default
---

> At either end of the educational spectrum, there lies a Hacker Class.

Reg &ldquo;raganwald&rdquo; Braithwaite is proof that somewhere, a combinatory forest is missing its Idiot Bird. His interests include constructing surreal numbers, deconstructing hopelessly egocentric nulls, and celebrating the joy of programming. He is the author of [JavaScript Allongé](https://leanpub.com/javascriptallongesix), [CoffeeScript Ristretto](https://leanpub.com/coffeescript-ristretto) and [raganwald.com](http://raganwald.com). He develops user experiences at [PagerDuty](https://pagerduty.com).

His other works are on [GitHub](https://github.com/raganwald) and [Leanpub](http://leanpub.com/u/raganwald), and from time to time he speaks at [conferences](http://lanyrd.com/profile/raganwald/).

Contact: [reg@braythwayt.com](mailto:reg@braythwayt.com) and [@raganwald](https://twitter.com/raganwald).

### recent non-technical essays

<div class="related">
  <ul>
    {% for post in site.posts %}
      {% unless post.categories contains "posterous" or post.categories contains "homoiconic" or post.categories contains "noindex" or post.tags contains "noindex" %}
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
    {% for post in site.categories.posterous %}
        <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endfor %}
  </ul>
</div>
