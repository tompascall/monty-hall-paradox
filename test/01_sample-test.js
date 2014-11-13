// 01_sample-test.js

'use strict';

var expect = require('expect.js');
var add = require('../src/01_sample-module.js');

describe('Sample test', function(){
  it('should add arguments', function(){
    expect(add(1, 2, 3, 4, 5)).to.equal(1 + 2 + 3 + 4 + 5);
  });
});
