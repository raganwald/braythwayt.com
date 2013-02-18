---
title: Solving the "Drunken Walk" problem with iterators
layout: homoiconic
tags: javascript
---

This is an example solution for [The "Drunken Walk" Programming Problem](http://braythwayt.com/2013/02/17/a-drunken-walk.html). It demonstrates how refactoring the "Tortoise and Hare" algorithm to use iterables instead of directly manipulating linked list nodes allows it to be used to find loops in a path as well as loops in a linked list. 

{% highlight javascript %}
var DIRECTIONS = [
                   {
                     delta: [1, 0],
                     toString: function () { return 'N'; }
                   },
                   {
                     delta: [0, 1],
                     toString: function () { return 'E'; }
                   },
                   {
                     delta: [-1, 0],
                     toString: function () { return 'S'; }
                   },
                   {
                     delta: [0, -1],
                     toString: function () { return 'W'; }
                   }
                 ];

var Game = (function () {
  function Game () {
    var i,
        j;
    
    this.size = Math.floor(Math.random() * 8) + 8;
    this.board = [];
    for (i = 0; i < this.size; ++i) {
      this.board[i] = [];
      for (j = 0; j < this.size; ++j) {
        this.board[i][j] = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      }
    }
    this.initialPosition = [
      2 + Math.floor(Math.random() * (this.size - 4)), 
      2 + Math.floor(Math.random() * (this.size - 4))
    ];
    return this;
  };
  
  Game.prototype.contains = function (position) {
    return position[0] >= 0 && position[0] < this.size && position[1] >= 0 && position[1] < this.size;
  };
  
  Game.prototype.iterator = function () {
    var position = [this.initialPosition[0], this.initialPosition[1]];
    return function () {
      var direction;
      if (this.contains(position)) {
        direction = this.board[position[0]][position[1]];
        position[0] += direction.delta[0];
        position[1] += direction.delta[1];
        return direction.toString();
      }
      else {
        return void 0;
      }
    }.bind(this);
  };
  
  return Game;
  
})();

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

var RelativeIterator = (function () {
  var LOOKUP = (function () {
    var LOOKUP = {},
        i;
    for (i = 0; i < DIRECTIONS.length; ++i) {
      LOOKUP[DIRECTIONS[i].toString()] = DIRECTIONS[i];
    }
    return LOOKUP;
  })();
  function RelativeIterator (directionIterator) {
    return accumulate(directionIterator, function (relativePositionStr, directionStr) {
      var delta = LOOKUP[directionStr].delta,
          matchData = relativePositionStr.match(/(-?\d+) (-?\d+)/),
          relative0 = parseInt(matchData[1], 10),
          relative1 = parseInt(matchData[2], 10);
      return "" + (relative0 + delta[0]) + " " + (relative1 + delta[1]);
    }, "0 0")
  };
  
  return RelativeIterator;
  
})();



function GameProxy (game) {
  return {
    iterator: function () {
      return RelativeIterator(game.iterator());
    }
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

function terminates (game) {
  return !tortoiseAndHareLoopDetector(GameProxy(game));
}
{% endhighlight %}