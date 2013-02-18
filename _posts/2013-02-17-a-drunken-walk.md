---
title: The "Drunken Walk" Programming Problem
layout: homoiconic
tags: javascript
---

In [Tortoises, Teleporting Turtles, and Iterators](http://braythwayt.com/2013/02/15/turtles-and-iterators.js.html), we looked at two different algorithms for detecting a linked list, each of which tangled iteration over the list with the algorithm for detecting a loop.

We then went on to discuss how to use iterators to untangle these concerns, but we never returned to refactor either of the algorithms. Let's do that now with the first of the original algorithms, "Tortoise and Hare:"

{% highlight javascript %}
var LinkedList = (function() {

  function LinkedList(content, next) {
    this.content = content;
    this.next = next != null ? next : void 0;
  }

  LinkedList.prototype.appendTo = function(content) {
    return new LinkedList(content, this);
  };

  LinkedList.prototype.tailNode = function() {
    var nextThis;
    return ((nextThis = this.next) != null ? nextThis.tailNode() : void 0) || this;
  };

  return LinkedList;

})();

function tortoiseAndHareLoopDetector (list) {
  var hare, tortoise, nextHare;
  tortoise = list;
  hare = list.next;
  while ((tortoise != null) && (hare != null)) {
    if (tortoise === hare) {
      return true;
    }
    tortoise = tortoise.next;
    hare = (nextHare = hare.next) != null ? nextHare.next : void 0;
  }
  return false;
};
{% endhighlight %}

Now we'll refactor it to use iterators instead of linked lists. We'll add an `.iterator()` method to linked lists, and we'll rewrite our loop detector function to take an "iterable" instead of a list:

{% highlight javascript %}
LinkedList.prototype.iterator = function() {
  var list = this;
  return function() {
    var value = list != null ? list.content : void 0;
    list = list != null ? list.next : void 0;
    return value;
  };
};

function tortoiseAndHareLoopDetector (iterable) {
  var tortoise = iterable.iterator(),
      hare = iterable.iterator(), 
      tortoiseValue, 
      hareValue;
  while (((tortoiseValue = tortoise()) != null) && ((hare(), hareValue = hare()) != null)) {
    if (tortoiseValue === hareValue) {
      return true;
    }
  }
  return false;
};
{% endhighlight %}

An interesting exercise, but what good is it? Well, let's pose a problem:

### a drunken walk

*Consider a finite checkerboard of unknown size. On each square is placed a spinner. Each spinner can point in one of four directions: N, S, E, and W. A chequer is placed randomly on the checkerboard. Each move consists of moving the red chequer one square in the direction of the spinner in the square it occupies. At the beginning, the spinners are spun and point in random directions. The spinners do not move thereafter.*

*You cannot see the entire board, just the square the chequerboard occupies. They are identical, so the only thing you know after a move is whether you have fallen off the edge of the board or whether you are still on the board. If you are still on the board, you know the direction of the spinner in that square.*

*Write a function that determines whether the chequer will remain on the board forever, in constant space.*

Well? Can refactoring our algorithm help us? Try to work this out for yourself. You'll need some kind of data structure for the chequerboard, including a randomized direction for each square and a randomly chosen start position.

### hint

In [Tortoises, Teleporting Turtles, and Iterators](http://braythwayt.com/2013/02/15/turtles-and-iterators.js.html), we saw the `fold` function that converts a finite iterator into a value:

{% highlight javascript %}
function fold (iter, binaryFn, seed) {
  var acc, element;
  acc = seed;
  element = iter();
  while (element != null) {
    acc = binaryFn.call(element, acc, element);
    element = iter();
  }
  return acc;
};
{% endhighlight %}

There's a similar function that works with finite or infinite iterators, `accumulate`:

{% highlight javascript %}
function accumulate (iter, binaryFn, seed) {
  var acc = seed;
  return function () {
    element = iter();
    if (element == null) {
      return element;
    }
    else {
      return (acc = binaryFn.call(element, acc, element));
    }
  }
};
{% endhighlight %}

`accumulate` can be very handy for solving this problem. A solution will be posted this week.