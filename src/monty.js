// monty.js

'use strict';

var monty = {
  setDoorNumbers: function(getAnswer) {
    monty.doorNumbers = getAnswer('Please give me the number of the doors');
  }
};

module.exports = monty;
