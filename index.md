---
title: Reginald Braithwaite
layout: default
---

> At either end of the educational spectrum, there lies a Hacker Class.

Reg &ldquo;raganwald&rdquo; Braithwaite is proof that somewhere, a combinatory forest is missing its Idiot Bird. His interests include constructing surreal numbers, deconstructing hopelessly egocentric nulls, and celebrating the joy of programming. He is the author of [JavaScript Allongé](https://leanpub.com/javascriptallongesix), [CoffeeScript Ristretto](https://leanpub.com/coffeescript-ristretto) and [raganwald.com](http://raganwald.com). He develops user experiences at [PagerDuty](https://pagerduty.com).

<iframe src="https://player.vimeo.com/video/76141334" width="600" height="337" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<p><a href="https://vimeo.com/76141334">I have a good feeling about this - Why tooling is poised to make the jump to hyperspace</a> from <a href="https://vimeo.com/webrebels/videos">Web Rebels Conference</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

His other works are on [GitHub](https://github.com/raganwald) and [Leanpub](http://leanpub.com/u/raganwald), you can follow him on Twitter as [@raganwald](https://twitter.com/raganwald), and from time to time he speaks at [conferences](http://lanyrd.com/profile/raganwald/). His email is [reg@braythwayt.com](mailto:reg@braythwayt.com), although most of it falls into the spam filter black hole.

### 2016 essays

<div class="related">
  <ul>
    {% for post in site.posts %}
      {% capture postyear %}{{post.date | date: '%Y'}}{% endcapture %}
      {% unless post.tags contains "noindex" or postyear != "2016" %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endunless %}
    {% endfor %}
  </ul>
</div>

### 2015 essays

<div class="related">
  <ul>
    {% for post in site.posts %}
      {% capture postyear %}{{post.date | date: '%Y'}}{% endcapture %}
      {% unless post.tags contains "noindex" or postyear != "2015" %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
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
