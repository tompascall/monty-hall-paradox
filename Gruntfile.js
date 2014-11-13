// Gruntfile.js

'use strict';

module.exports = function(grunt){

  var files = {
      src: 'src/**/*.js',
      test: 'test/**/*.js',
      grunt: 'Gruntfile.js',
    };

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    watch: {
      js: {
        files: [files.src],
        tasks: ['test:dev']
      },
      tests: {
        files: [files.test],
        tasks: ['test:dev']
      },
      config: {
        files: [files.grunt],
        tasks: ['newer:jshint:config']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      js: [files.src],
      tests: [files.test],
      config: [files.grunt]
    },

    // mochacli: {
    //   options: {
    //     require: ['expect.js'],
    //     files: [files.test],
    //     reporter: 'spec',
    //     bail: true
    //   }
    // }

    mochacli: {
      options: {
        files: [files.test],
        bail: true
      },
      all: {
          options: {
            bail: false
          }
      },
      dev: {
          options: {
          }
      }
    }
  });


  grunt.registerTask('default', ['test:dev']);
  grunt.registerTask('test:dev', ['newer:jshint:config',
    'newer:jshint:tests', 'newer:jshint:js', 'mochacli:dev']);
  grunt.registerTask('test:all', ['newer:jshint:config',
    'newer:jshint:tests', 'newer:jshint:js', 'mochacli:all']);
};
