/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        less: {
            dist: {
                options: {
                    sourceMap: true,
                    sourceMapURL: 'symphony.min.css.map'
                },
                files: {
                    'symphony/assets/css/symphony.min.css': [
                        'symphony/assets/css/src/variables.less',
                        'symphony/assets/css/src/symphony.less',
                        'symphony/assets/css/src/symphony.affix.less',
                        'symphony/assets/css/src/symphony.grids.less',
                        'symphony/assets/css/src/symphony.forms.less',
                        'symphony/assets/css/src/symphony.tables.less',
                        'symphony/assets/css/src/symphony.frames.less',
                        'symphony/assets/css/src/symphony.tabs.less',
                        'symphony/assets/css/src/symphony.drawers.less',
                        'symphony/assets/css/src/symphony.associations.less',
                        'symphony/assets/css/src/symphony.notices.less',
                        'symphony/assets/css/src/symphony.suggestions.less',
                        'symphony/assets/css/src/symphony.calendar.less',
                        'symphony/assets/css/src/symphony.filtering.less',
                        'symphony/assets/css/src/admin.less'
                    ],
                    'symphony/assets/css/installer.min.css': [
                        'symphony/assets/css/src/symphony.less',
                        'symphony/assets/css/src/symphony.grids.less',
                        'symphony/assets/css/src/symphony.forms.less',
                        'symphony/assets/css/src/symphony.frames.less',
                        'symphony/assets/css/src/installer.css'
                    ],
                    'extensions/snake/assets/custom.css': [
                        'symphony/assets/css/src/custom.less'
                    ]
                },
            },
        },

        autoprefixer: {
            styles: {
                files: {
                    'symphony/assets/css/symphony.min.css': [
                        'symphony/assets/css/symphony.min.css'
                    ],
                    'symphony/assets/css/installer.min.css': [
                        'symphony/assets/css/installer.min.css'
                    ],
                    'symphony/assets/css/devkit.min.css': [
                        'symphony/assets/css/src/devkit.css'
                    ],
                    'extensions/snake/assets/custom.css': [
                        'extensions/snake/assets/custom.css'
                    ]
                }
            }
        },

        csso: {
            styles: {
                files: {
                    'symphony/assets/css/symphony.min.css': [
                        'symphony/assets/css/symphony.min.css'
                    ],
                    'symphony/assets/css/installer.min.css': [
                        'symphony/assets/css/installer.min.css'
                    ],
                    'symphony/assets/css/devkit.min.css': [
                        'symphony/assets/css/devkit.min.css'
                    ],
                    'extensions/snake/assets/custom.css': [
                        'extensions/snake/assets/custom.css'
                    ]
                }
            }
        },

        /*
        jshint: {
            scripts: [
                'symphony/assets/js/src/symphony.js',
                'symphony/assets/js/src/symphony.collapsible.js',
                'symphony/assets/js/src/symphony.orderable.js',
                'symphony/assets/js/src/symphony.selectable.js',
                'symphony/assets/js/src/symphony.duplicator.js',
                'symphony/assets/js/src/symphony.tags.js',
                'symphony/assets/js/src/symphony.suggestions.js',
                'symphony/assets/js/src/symphony.pickable.js',
                'symphony/assets/js/src/symphony.timeago.js',
                'symphony/assets/js/src/symphony.notify.js',
                'symphony/assets/js/src/symphony.drawer.js',
                'symphony/assets/js/src/admin.js'
            ]
        },
        */

        uglify: {
            scripts: {
                options: {
                    preserveComments: 'some'
                },
                files: {
                    'symphony/assets/js/symphony.min.js': [
                        'symphony/assets/js/lib/jquery.js',
                        'symphony/assets/js/lib/signals.js',
                        'symphony/assets/js/lib/crossroads.js',
                        'symphony/assets/js/lib/selectize.js',
                        'symphony/assets/js/lib/moment.min.js',
                        'symphony/assets/js/lib/clndr.min.js',
                        'symphony/assets/js/src/symphony.js',
                        'symphony/assets/js/src/symphony.affix.js',
                        'symphony/assets/js/src/symphony.collapsible.js',
                        'symphony/assets/js/src/symphony.defaultvalue.js',
                        'symphony/assets/js/src/symphony.orderable.js',
                        'symphony/assets/js/src/symphony.selectable.js',
                        'symphony/assets/js/src/symphony.duplicator.js',
                        'symphony/assets/js/src/symphony.tags.js',
                        'symphony/assets/js/src/symphony.pickable.js',
                        'symphony/assets/js/src/symphony.timeago.js',
                        'symphony/assets/js/src/symphony.notify.js',
                        'symphony/assets/js/src/symphony.drawer.js',
                        'symphony/assets/js/src/symphony.calendar.js',
                        'symphony/assets/js/src/symphony.filtering.js',
                        'symphony/assets/js/src/symphony.suggestions.js',
                        'symphony/assets/js/src/backend.js',
                        'symphony/assets/js/src/backend.views.js',
                    ]
                }
            }
        },

        watch: {
            styles: {
                files: 'symphony/assets/css/src/*',
                tasks: ['less', 'csso']
            },
            scripts: {
                files: 'symphony/assets/js/src/*.js',
                tasks: ['js']
            },
            php: {
                files: ['symphony/**/*.php', 'install/**/*.php'],
                tasks: ['php']
            }
        },

        phpcs: {
            application: {
                src: ['symphony/**/*.php', 'install/**/*.php', 'index.php']
            },
            options: {
                bin: 'vendor/bin/phpcs',
                standard: 'PSR1',
                showSniffCodes: true,
                tabWidth: 4,
                errorSeverity: 10
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-csso');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-phpcs');

    grunt.registerTask('default', ['less', 'autoprefixer', 'csso', 'uglify']);
    grunt.registerTask('css', ['less', 'autoprefixer', 'csso']);
    grunt.registerTask('php', ['phpcs']);
    grunt.registerTask('js', ['uglify']);
};