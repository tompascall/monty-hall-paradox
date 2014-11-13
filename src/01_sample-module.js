// 01_sample-module.js

'use strict';


var add = function(){
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(previous, current){
    return previous + current;
  });
};

module.exports = add;
