module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.initConfig({
    clean: ["public/js", "public/partials"],
    uglify: {
      my_target: {
        options: {
          mangle: false
        },
        files: {
          'public/js/router.js': ['js/router.js']
        } //files
      } //my_target
    }, //uglify
    copy: {
      main: {
        files: [
          {
            expand : true,
            src    : ['exercises/**/*.js'],
            dest   : 'public/js/',
            flatten: true,
            filter : 'isFile'
          },
          {
            expand : true,
            src    : ['exercises/**/*.html'],
            dest   : 'public/partials/',
            flatten: true,
            filter : 'isFile'
          },
        ]
      }
    },
    compass: {
      dev: {
        options: {
          config: 'compass_config.rb'
        } //options
      }  //dev
    }, //compass
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['exercises/**/*.js', 'js/*.js'],
        tasks: ['clean','uglify'],
        tasks: ['copy']
      }, //script
      sass: {
        files: ['sass/*.scss'],
        tasks: ['compass:dev']
      }, //sass
      html: {
        files: ['exercises/**/*.html', 'public/index.html']
      }
    }, //watch
    express: {
      options: {
        // override defaults here
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    }
  }) //initConfig
  grunt.registerTask('default', ['express:dev', 'watch']);
} //exports