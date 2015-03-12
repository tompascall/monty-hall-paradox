// monty.js

'use strict';

var readline = require('readline');

var monty = {
  setDoorNumbers: function (getAnswer) {
    monty.doorNumbers = getAnswer('Please give me the number of doors: ');
    if (typeof monty.doorNumbers !== 'number') {
      monty.doorNumbers = Number(monty.doorNumbers);
    }
  },
  setRoundNumbers: function (getAnswer) {
    monty.roundNumbers = getAnswer('Please give me the number of rounds: ');
    if (typeof monty.roundNumbers !== 'number') {
      monty.roundNumbers = Number(monty.roundNumbers);
    }
  },
  setMethod: function (getAnswer) {
    monty.method = getAnswer('Shall we stay or shall we change the door at the end? (stay: 0, change: 1) ');
    if (Number(monty.method) === 0) {
      monty.method = 'stay';
    }
    else monty.method = 'change';
  }
};

monty.setDoorNumbers(getAnswer);
monty.setRoundNumbers(getAnswer);
monty.setMethod(getAnswer);


function getAnswer(question) {
    var answer;
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, function(answ) {
      answer = answ;
      rl.close();
    });
    return answer;
  }

module.exports = monty;
