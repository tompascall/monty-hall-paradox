// monty.js

'use strict';

var Q = require('q');


var readline = require('readline');

var monty = {
  doors: [],
  setDoorNumbers: function (getAnswer) {
    var deferred = Q.defer();
    getAnswer('Please give me the number of doors: ')
    .then(function (answer) {
      monty.doorNumbers = answer;
      if (typeof monty.doorNumbers !== 'number') {
        monty.doorNumbers = Number(monty.doorNumbers);
      }
      deferred.resolve();
    });
    return deferred.promise;
  },

  setRoundNumbers: function (getAnswer) {
    var deferred = Q.defer();
    getAnswer('Please give me the number of rounds: ')
    .then(function (answer) {
      monty.roundNumbers = answer;
      if (typeof monty.roundNumbers !== 'number') {
        monty.roundNumbers = Number(monty.roundNumbers);
      }
      deferred.resolve();
    });
    return deferred.promise;
  },

  setMethod: function (getAnswer) {
    var deferred = Q.defer();
    getAnswer('Shall we stay or shall we change the door at the end? (stay: 0, change: 1) ')
    .then(function (answer) {
      monty.method = answer;
      if (Number(monty.method) === 0) {
        monty.method = 'stay';
      }
      else monty.method = 'change';
      deferred.resolve();
    });
    return deferred.promise;
  },

  setCarPosition: function () {
    monty.carPosition = getRandomIntNumber(0, monty.doorNumbers - 1);
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
    var defeats = 0;
    var result;
    for (var i = 1; i <= monty.roundNumbers; i++) {
      monty.setCarPosition();
      monty.chooseDoor();
      result = monty.getResult();
      if (result === 'win') {
        wins++;
      }
      else {
        defeats++;
      }
    }
    console.log('wins: ' + wins);
    console.log('defeats: ' + defeats);
    console.log('wins / defeats : ' + wins / defeats);
  }
};

monty.setDoorNumbers(getAnswer)
.then(function () {
  return monty.setRoundNumbers(getAnswer);
})
.then(function () {
  return monty.setMethod(getAnswer);
})
.then(function () {
  monty.showResult();
});

function getAnswer(question) {
    var deferred = Q.defer();
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, function(answer) {
      rl.close();
      deferred.resolve(answer);
    });
    return deferred.promise;
  }

function getRandomIntNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = monty;
