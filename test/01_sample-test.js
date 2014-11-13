// 01_sample-test.js

'use strict';

var expect = require('expect.js');

describe('A simple test', function(){
  it('should run', function(){
    expect('foo').to.equal('foo');
  });
});
