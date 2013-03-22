---
title: Reginald Braithwaite
layout: default
---

[![copyright (c) 2008 photojunkie](/assets/images/reg_at_meshu.png)](http://www.flickr.com/photos/photojunkie/2510690700)

> At either end of the educational spectrum, there lies a Hacker Class.

Reg “raganwald” Braithwaite is proof that somewhere, a village is missing its idiot. Either that, or a combinatory forest is missing its Idiot Bird, nobody is really sure. His interests include constructing surreal numbers, deconstructing hopelessly egocentric nulls, and celebrating the joy of programming.

### contact and other resources

* [résumé](/assets/reginald/RegBraithwaite20120423.pdf) (from 2012)
* email: [reg@braythwayt.com](mailto:reg@braythwayt.com)
* talks and conferences: [lanyrd.com](http://lanyrd.com/profile/raganwald/)
* [books](http://leanpub.com/u/raganwald)
* <a href="https://twitter.com/raganwald" class="twitter-follow-button" data-show-count="false">Follow @raganwald</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

### technical essays and code

* [raganwald.com](http://raganwald.com)
* [active code](http://github.com/raganwald)
* [deprecated code](http://github.com/raganwald-deprecated)

### other recent essays

<div class="related">
  <ul>
    {% for post in site.posts %}
      {% unless post.categories contains "posterous" or post.categories contains "homoiconic"or post.categories contains "noindex" %}
        <li>
    <a href="{{ post.url }}">{{ post.title }}</a> (<span>{{ post.date | date: "%B %e, %Y" }}</span>)
        </li>
      {% endunless %}
    {% endfor %}
  </ul>
</div>

### reposts from homoiconic

<div class="related">
  <ul>
    {% for post in site.categories.homoiconic %}
        <li>
    <a href="{{ post.url }}">{{ post.title }}</a> (<span>{{ post.date | date: "%B %e, %Y" }}</span>)
        </li>
    {% endfor %}
  </ul>
</div>

### reposts from posterous

<div class="related">
  <ul>
    {% for post in site.categories.posterous %}
        <li>
    <a href="{{ post.url }}">{{ post.title }}</a> (<span>{{ post.date | date: "%B %e, %Y" }}</span>)
        </li>
    {% endfor %}
  </ul>
</div>