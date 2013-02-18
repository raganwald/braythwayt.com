---
title: A Drunken Walk
layout: homoiconic
tags: javascript
---

In [Tortoises, Teleporting Turtles, and Iterators](http://braythwayt.com/2013/02/15/turtles-and-iterators.js.html), we looked at two different algorithms for detecting a linked list, each of which tangled iteration over the list with the algorithm for detecting a loop.

We then went on to discuss how to use iterators to untangle these concerns, but we never returned to refactor either of the algorithms. Let's do that now with the first of the original algorithms, "Tortoise and Hare:"

~~~~~~~~ javascript
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
~~~~~~~~

Now we'll refactor it to use iterators instead of linked lists. We'll add an `.iterator()` method to linked lists as well:

~~~~~~~~ javascript
LinkedList.prototype.iterator = function() {
  var list = this;
  return function() {
    var value = list != null ? list.content : void 0;
    list = list != null ? list.next : void 0;
    return value;
  };
};

function tortoiseAndHareLoopDetector (list) {
  var tortoise = list.iterator(),
      hare = list.iterator(), 
      tortoiseValue, 
      hareValue;
  while (((tortoiseValue = tortoise()) != null) && ((hareValue = hare()() != null))) {
    if (tortoiseValue === hareValue) {
      return true;
    }
  }
  return false;
};
~~~~~~~~

An interesting exercise, but what good is it? Well, let's pose a problem:

### a drunken walk

*Consider a finite checkerboard of unknown size. On each square is placed a spinner. Each spinner can point in one of four directions: N, S, E, and W. A chequer is placed randomly on the checkerboard. Each move consists of moving the red chequer one square in the direction of the spinner in the square it occupies. If the chequer eventually falls off the edge of the board, it is a "loss." If the chequer never falls off the board, it is a "win."*

*Report a win or loss for the chequer in constant space.*