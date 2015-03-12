// monty.spec.js

'use strict';

var expect = require('expect.js');
var monty = require('../src/monty.js');
var readline = require('readline');


describe('Get user inputs', function () {
  var userAnswer;

  it('should set the number of doors', function (done) {
    userAnswer = '3\n';
    monty.setDoorNumbers(getAnswer.bind(null, done));
    expect(monty.doorNumbers).to.equal(3);
  });

  it('should set the number of rounds', function (done) {
    userAnswer = '2\n';
    monty.setRoundNumbers(getAnswer.bind(null, done));
    expect(monty.roundNumbers).to.equal(2);
  });

   it('should set the calculation method to "stay"', function (done) {
     userAnswer = '0\n';
     monty.setMethod(getAnswer.bind(null, done));
     expect(monty.method).to.equal('stay');
   });

  it('should set the calculation method to "change"', function (done) {
    userAnswer = '1\n';
     monty.setMethod(getAnswer.bind(null, done));
    expect(monty.method).to.equal('change');
  });

  function mockUserAnswer (readLine, mockAnswer) {
    readLine.write(mockAnswer);
  }

  function getAnswer(done, question) {
    var answer;
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, function(answ) {
      answer = answ;
      rl.close();
      done();
    });

    mockUserAnswer(rl, userAnswer);
    return answer;
  }
});

describe('Prepare the room behind the doors', function () {

  it('should fill the rooms behind the doors', function () {
    monty.initDoors();
    expect(monty.doors.length).to.equal(monty.doorNumbers);
  });

  it('should put a car behind one of the doors', function () {
    monty.initDoors();
    expect(monty.doors.indexOf('car')).to.be.greaterThan(-1);
    expect(monty.doors.indexOf('car')).to.be.lessThan(monty.doorNumbers);
   });
});
