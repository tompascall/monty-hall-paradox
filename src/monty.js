// monty.js

'use strict';
//var Q = require('q');
var readline = require('readline');
//var deferred = Q.defer();

var monty = {
  doorNumbers: 2,
  setDoorNumbers: function(getAnswer) {

    monty.doorNumbers = getAnswer('Please give me the number of the doors: ');
    if (typeof monty.doorNumbers !== 'number') {
      monty.doorNumbers = Number(monty.doorNumbers);
    }
  }
};

monty.setDoorNumbers(getAnswer);

function getAnswer(question) {
  var answ;
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(question, function(answer) {
    console.log(answer);
    answ = answer;
    rl.close();
  });

  return answ;//deferred.promise;
}


module.exports = monty;
