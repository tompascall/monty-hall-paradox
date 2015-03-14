// monty.spec.js

'use strict';

var expect = require('expect.js');
var monty = require('../src/monty.js');
var readline = require('readline');
var Q = require('q');


describe('Get user inputs', function () {
  var userAnswer;

  it('should set the number of doors', function () {
    userAnswer = '3\n';
    monty.setDoorNumbers(getAnswer)
    .then(function () {
      expect(monty.doorNumbers).to.equal(3);
    });
  });

  it('should set the number of rounds', function () {
    userAnswer = '2\n';
    monty.setRoundNumbers(getAnswer)
    .then(function () {
      expect(monty.roundNumbers).to.equal(2);
    });
  });

  it('should set the calculation method to "stay"', function () {
    userAnswer = '0\n';
    monty.setMethod(getAnswer)
    .then(function () {
      expect(monty.method).to.equal('stay');
    });
  });

  it('should set the calculation method to "change"', function () {
    userAnswer = '1\n';
    monty.setMethod(getAnswer)
    .then(function () {
      expect(monty.method).to.equal('change');
    });
  });

  function mockUserAnswer (readLine, mockAnswer) {
    readLine.write(mockAnswer);
  }

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

    mockUserAnswer(rl, userAnswer);
    return deferred.promise;
  }
});
