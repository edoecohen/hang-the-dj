module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            jsLib: {
                src: [
                    'client/bower_components/angular/angular.js',
                    'client/bower_components/angular-route/angular-route.js',
                    'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    'client/bower_components/angular-youtube-mb/src/angular-youtube-embed.js',
                    ],
                dest: 'client/build/prodLib.js'
             },
             jsApp: {
                src: [
                    'client/controllers/app.js',
                    'client/controllers/roomsCtrl.js',
                    'client/controllers/roomCtrl.js'
                ],
                dest: 'client/build/prodApp.js'
             },
             css: {
                src: [
                    'client/bower_components/bootstrap/dist/css/bootstrap.css',
                    'client/style.css'
                ],
                dest: 'client/build/production.css'
             }
        },

        uglify: {
            build: {
                src: 'client/build/prodLib.js',
                dest: 'client/build/prodLib.min.js'
            },
            buildApp: {
                src: 'client/build/prodApp.js',
                dest: 'client/build/prodApp.min.js'
            }
        },

        cssmin: {
            build: {
                src: 'client/build/production.css',
                dest: 'client/build/production.min.css'
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);

};