---
title: Solving the "Drunken Walk" problem with iterators
layout: homoiconic
tags: javascript
---

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
                
var LOOKUP = (function () {
  var LOOKUP = {},
      i;
  for (i = 0; i < 4; ++i) {
    LOOKUP[DIRECTIONS[i].toString()] = DIRECTIONS[i];
  }
  return LOOKUP;
})();

var Game = (function () {
  function Game () {
    var self = this instanceof Game ? this : new Game (),
        i,
        j;
    
    self.size = Math.floor(Math.random() * 8) + 8;
    self.board = [];
    for (i = 0; i < size; ++i) {
      self.board[i] = [];
      for (j = 0; j < size; ++j) {
        self.board[i][j] = DIRECTIONS[Math.floor(Math.random() * self.size)];
      }
    }
    self.initialPosition = [Math.floor(Math.random() * self.size), Math.floor(Math.random() * self.size)]
    return self;
  };
  
  Game.prototype.contains = function (position) {
    return position[0] >= 0 && position[0] < this.size && position[1] >= 0 && position[1] < this.size;
  };
  
  Game.prototype.iterator = function () {
    var position = this.initialPosition;
    return function () {
      var direction;
      if (this.contains(position)) {
        direction = self.board[position[0]][position[1]];
        position[0] += direction.delta[0];
        position[1] += direction.delta[1];
        return direction.toString();
      }
      else {
        return void 0;
      }
    }
  };
  
})();

function RelativeIterator (directionIterator) {
  return accumulate(directionIterator, function (relativePosition, str) {
    var delta = LOOKUP[str].delta;
    return [ relativePosition[0] + delta[0], relativePosition[1] + delta[1] ]
  }, [0, 0])
}

function GameProxy (game) {
  return {
    iterator: function () {
      return RelativeIterator(game.iterator());
    }
  };
};

function doesGameTerminate (game) {
  return !tortoiseAndHareLoopDetector(GameProxy(game));
}