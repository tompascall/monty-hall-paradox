// monty.spec.js

'use strict';

var expect = require('expect.js');
var monty = require('../src/monty.js');
var readline = require('readline');

describe('test Monty Hall paradox', function () {
  it('should be ok', function () {
    expect(monty).to.be.an('object');
  });

  it('should set the number of doors', function (done) {
    monty.setDoorNumbers(getAnswer.bind(null, done));
    expect(monty.doorNumbers).to.equal(1);
  });

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

    rl.write('1\n');
    return answer;
  }
});
