/*jslint
    node: true */

module.exports = function (grunt) {
    "use strict";
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            }
        },
        jslint: {
            src: ['gruntfile.js', 'js/*.js']
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/results/results.txt',
                    quiet: false,
                    clearRequireCache: false
                },
                src: ['test/**/*.js']
            }
        },
        markdown: {
            all: {
                expand: true,
                src: 'README.md',
                dest: 'doc/',
                ext: '.html'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'lib/taxes.min.js': ['js/taxes.js']
                }
            }
        },
        watch: {
            javascript: {
                files: ['<%= jslint.src %>'],
                tasks: ['jslint', 'mochaTest']
            },
            styles: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            mochaTest: {
                files: ['<%= mochaTest.test.src %>'],
                tasks: ['mochaTest']
            },
            markdown: {
                files: ['<%= markdown.all.src %>'],
                tasks: ['markdown']
            },
            uglify: {
                files: ['js/taxes.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('test', ['jslint', 'mochaTest']);
    grunt.registerTask('default', ['jslint', 'less', 'mochaTest', 'markdown', 'uglify']);
};
