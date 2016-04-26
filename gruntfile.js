module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "app/scss/*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
      dev: {
        files: {
          // destination         // source file
          "app/css/styles.css" : "app/scss/styles.scss"
        }
      }
    },
    // Using the BrowserSync Server for your static .html files.
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            "js/*.js",
            "css/*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: ["./","./app"]
        }
      }
    },
    clean: ['dist'],
    copy: {
      html: {
        files: [
          {src: 'app/index.html', dest: 'dist/index.html'}
        ]
      },
      images: {
        files: [
          {
            expand: true,
            cwd: 'app/images/',
            src: ['**/*.{png,jpg,svg}'],
            dest:'dist/images/'
          }
        ]
      }
    },
    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist'
      }
    },
    usemin: {
      html: 'dist/index.html',
      options: {
        dirs: ['css', 'js', 'images']
      }
    },

  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  // copy img, css, js and minified css and js
  grunt.registerTask('build',[
    'copy',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin'
  ]);

  // Launch BrowserSync + watch task
  grunt.registerTask('init', ['browserSync', 'watch']);
};
