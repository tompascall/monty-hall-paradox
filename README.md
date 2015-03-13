###Testing Monty Hall problem

This project represents a simple test for [Monty Hall problem](http://en.wikipedia.org/wiki/Monty_Hall_problem). It asks you to give 
- the number of doors 
- the number of rounds and
- the calculation method.

The **number of doors** is quite straightforward. In the original situation there was 3 doors, but but in the app you can choose 3 or more doors. The **number of rounds** means that the app calculates round-times the chances in order to have a more precise result. The **calculation method** means that you decide you will change the door at the end, or you will stay. Every round will be calculated with this method. So if you choose 100 doors, 1000 rounds and to change, then the app create a random number between 1 - 100 (this is the position of the car), an another random number between 1 - 100 (this is the choice of the player), and 
- if these are equal and the method is 'stay', the result is win,
- if these are equal and the method is 'change', the result is defeat,
- if these are not equal and the method is stay, the result is defeat,
- if these are not equal and the method is change, the result is win.

The app calculates this 'rounds' times, and give you the proper result.

You can see, that you have much less chance to make a hit in 100 doors, than in 2 doors.   

####Run the application

- You'll need to install [Node.js](http://nodejs.org/)
- Clone the project, then run `npm install`
- Run `npm start`
- You have to give the number of doors, the number of rounds and the method of calculation (based on the decision if we want to stay or change our position). The app will calculate the wins and the defeats so you can see that Marilyn vos Savant was really right.

####Prerequisities of development

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

####Used packages

- Grunt.js for task automaton
  - `grunt-contrib-jshint` for linting
  - `grunt-newer` for running Grunt tasks on newer files only
  - `grunt-contrib-watch`
  - `grunt-mocha-cli` (Mocha testing framework for Grunt)
  - `grunt-contrib-clean` (cleaning up the boilerplate)
- Expect.js as an assertion framework
- Sinon.js as a mocking tool

####EditorConfig

EditorConfig is used to maintain consistent coding styles. There is an `.editorconfig` file in the project root directory, that defines the main styles.

You have [EditorConfig plugins](http://editorconfig.org/) for lots of editors.

As opening a file, EditorConfig plugins look for a file named `.editorconfig` in the directory of the opened file and in every parent directory. A search for `.editorconfig` files will stop if the root filepath is reached or an `.editorconfig` file with `root=true` is found.
