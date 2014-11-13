###Minimal testing framework for Node.js projects

####Used packages
- Grunt for task automaton
  - grunt-contrib-jshint for linting
  - grunt-newer for running Grunt tasks on newer files only
  - grunt-contrib-watch
  - grunt-mocha-cli (Mocha testing framework for Grunt)
- Expect.js as an assertion framework

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

- `grunt test:dev` to lint your code and run your tests. The task stops if there's any failing test. The same happens if you run `grunt` without any arguments.

- `grunt test:all` to lint your code and run the test suite with all the tests, no matter if there's a failing one.

- `grunt watch` results in running grunt tasks automatically when a file is changed in the watched directory.
