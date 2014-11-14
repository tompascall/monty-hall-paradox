###Displayer

####Prerequisities

- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com/getting-started)

####Installation

Clone the project, then run `npm install`.

####Grunt tasks

We have the following tasks:
- jshint to lint .js files
- mochacli to run tests

When developing, run:

- `grunt watch` results in running grunt tasks automatically when a file is changed in the watched directory.

- `grunt test:dev` to lint your code and run your tests. The task stops if there's any failing test. The same happens if you run `grunt` without any arguments.

- `grunt test:all` to lint your code and run the test suite with all the tests, no matter if there's a failing one.

####Sample project

You can check the boilerplate by running `grunt` in the project folder. There is a sample test in the `test` directory, that tests a simple `sum()` function:

```js
'use strict';

var expect = require('expect.js');
var sum = require('../src/01_sample-module.js');

describe('Sample test', function(){
  it('should add arguments', function(){
    expect(sum(1, 2, 3, 4, 5)).to.equal(1 + 2 + 3 + 4 + 5);
  });
});
```

And there is a sample production code in `src` directory, that contains the tested function:

```js
'use strict';

var sum = function(){
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(previous, current){
    return previous + current;
  });
};

module.exports = sum;
```

####Cleaning up the boilerplate

You can clean up the boilerplate by running `grunt clean`. It will delete all files and subfolders in `src` and `test` folders.

####Used packages

- Grunt.js for task automaton
  - `grunt-contrib-jshint` for linting
  - `grunt-newer` for running Grunt tasks on newer files only
  - `grunt-contrib-watch`
  - `grunt-mocha-cli` (Mocha testing framework for Grunt)
  - `grunt-contrib-clean` (cleaning up the boilerplate)
- Expect.js as an assertion framework

####EditorConfig

EditorConfig is used to maintain consistent coding styles. There is an `.editorconfig` file in the project root directory, that defines the main styles.

You have [EditorConfig plugins](http://editorconfig.org/) for lots of editors.

As opening a file, EditorConfig plugins look for a file named `.editorconfig` in the directory of the opened file and in every parent directory. A search for `.editorconfig` files will stop if the root filepath is reached or an `.editorconfig` file with `root=true` is found.
