// monty.spec.js

'use strict';

var expect = require('expect.js');
var monty = require('../src/monty.js');

describe('test Monty Hall paradox', function () {
  it('should be ok', function () {
    expect(monty).to.be.an('object');
  });

  it('should get the number of doors', function () {
    var answer = 1;
    var getAnswer = function (question) {
       console.log(question);
       return answer;
    };
    monty.setDoorNumbers(getAnswer);
    expect(monty.doorNumbers).to.equal(1);
  });
});
