// monty.js

'use strict';

var readline = require('readline');

var monty = {
  doors: [],
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
  },

  initDoors: function () {
    for (var i = 0; i < monty.doorNumbers; i++) {
      monty.doors.push('goat');
    }
    monty.carPosition = getRandomIntNumber(0, monty.doorNumbers - 1);
    monty.doors[monty.carPosition] = 'car';
  },

  chooseDoor: function () {
    monty.chosenDoor = getRandomIntNumber(0, monty.doorNumbers - 1);
  },

  getResult: function () {
    if ((monty.carPosition === monty.chosenDoor) && monty.method === 'stay') {
      return 'win';
    }
    if ((monty.carPosition === monty.chosenDoor) && monty.method === 'change') {
      return 'lose';
    }
    if ((monty.carPosition !== monty.chosenDoor) && monty.method === 'change') {
      return 'win';
    }
    if ((monty.carPosition !== monty.chosenDoor) && monty.method === 'stay') {
      return 'lose';
    }
  },

  showResult: function () {
    var wins = 0;
    var loses = 0;
    var result;
    for (var i = 1; i <= monty.roundNumbers; i++) {
      result = monty.getResult();
      if (result === 'win') {
        wins++;
      }
      else {
        loses++;
      }
    }
    console.log(wins / loses);
  }
};

monty.setDoorNumbers(getAnswer);
// monty.setRoundNumbers(getAnswer);
// monty.setMethod(getAnswer);
// monty.initDoors();
// monty.chooseDoor();
// monty.showResult();


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

function getRandomIntNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = monty;
