module.exports = function(grunt) {
    'use strict';
    var filesLess = {};
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        symlink: {
            app: {
                relativeSrc: '../../app/Resources/public',
                dest: 'web/bundles/app',
                options: {type: 'dir'}
            },
            vendor: {
                relativeSrc: '../../bower_components',
                dest: 'web/bundles/vendor',
                options: {type: 'dir'}
            }
            /*images: {
                relativeSrc: '../../../web/bundles/app/images',
                dest: 'web/built/images/app',
                options: {type: 'dir'}
            }*/
        }
        /*concat: {
            lessCore: {
                src: [
                    'web/bundles/vendor/bootstrap/less/variables.less',
                    'web/bundles/app/less/sprite.less',
                    'web/bundles/app/less/layout.less',
                    'web/bundles/app/less/header.less',
                    'web/bundles/app/less/menu.less',
                    'web/bundles/app/less/menu_responsive.less',
                    'web/bundles/app/less/footer.less',
                    'web/bundles/app/less/contenu.less',
                ],
                dest: 'web/built/less/core.less'
            },
            common: {
                src: [
                    'web/bundles/vendor/jquery/dist/jquery.js',
                    'web/bundles/vendor/gray/js/jquery.gray.js',
                    'web/bundles/vendor/bootstrap/dist/js/bootstrap.js',
                    'web/bundles/vendor/modernizr/modernizr.js',
                    'web/bundles/vendor/jquery-prettyPhoto/js/jquery.prettyPhoto.js',
                    'web/bundles/app/js/jquery.dlmenu.js'
                ],
                dest: 'web/built/js/plugins.js'
            },
            jsCore: {
                src: [
                    'web/bundles/app/js/common.js',
                    'web/bundles/app/js/menu.js',
                    'web/bundles/app/js/home.js',
                ],
                dest: 'web/built/js/core.js'
            },
            ie8: {
                src: [
                    'vendor-front/html5shiv/dist/html5shiv-printshiv.js',
                    'vendor-front/respond/dest/respond.src.js'
                ],
                dest: 'web/built/js/ie8.js'
            }
        },
        watch: {
            css: {
                files: ['web/bundles/* /less/ *.less'],
                tasks: ['concat:lessCore', 'less:discovering', 'less']
            },
            javascript: {
                files: ['web/bundles/* /js/ *.js'],
                tasks: ['javascript:dev']
            }
        },
        uglify: {
            dist: {
                files: {
                    'web/built/js/core.min.js': ['web/built/js/core.js'],
                    'web/built/js/plugins.min.js': ['web/built/js/plugins.js'],
                    'web/built/js/ie8.min.js': ['web/built/js/ie8.js']
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'web/built/css/core.min.css': ['web/built/css/core.css']
                }
            }
        },*/
//        jshint: {
//            options: {
//                reporter: require('jshint-stylish'),
//                scripturl: true
//            },
//            all: [
//                'Gruntfile.js',
//                'web/bundles/*/js/*.js',
//                '!web/bundles/sizanniajquerytools/js/configs.js'
//            ]
//        },
//        less: {
//            bundles: {
//                files: filesLess
//            }
//        },
//        imagemin: {
//            png: {
//                options: {
//                    optimizationLevel: 7
//                },
//                files: [
//                    {
//                        // Set to true to enable the following options…
//                        expand: true,
//                        // cwd is 'current working directory'
//                        cwd: 'web/bundles/',
//                        src: ['**/*.png'],
//                        // Could also match cwd line above. i.e. project-directory/img/
//                        dest: 'web/built/',
//                        ext: '.png'
//                    }
//                ]
//            },
//            jpg: {
//                options: {
//                    progressive: true
//                },
//                files: [
//                    {
//                        // Set to true to enable the following options…
//                        expand: true,
//                        // cwd is 'current working directory'
//                        cwd: 'web/bundles/',
//                        src: ['**/*.jpg'],
//                        // Could also match cwd. i.e. project-directory/img/
//                        dest: 'web/built/',
//                        ext: '.jpg'
//                    }
//                ]
//            }
//        }
    });
    grunt.loadNpmTasks('grunt-symlink');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Default task(s).
    grunt.registerTask('default', ['dev']);
    grunt.registerTask('dev', ['css:dev']);
    //grunt.registerTask('dev', ['css:dev', 'javascript:dev']); //replacement
    grunt.registerTask('deploy', ['css:dist', 'javascript:dist']);
    grunt.registerTask('css:dev', ['symlink:app', 'symlink:vendor']);
    //grunt.registerTask('css:dev', ['symlink:app', 'symlink:vendor', 'concat:lessCore', 'less:discovering', 'less', 'initDirectoryImages', 'symlink:images', 'symlink:imagesPage', 'symlink:imagesAdmin']); //replacement
    grunt.registerTask('css:dist', ['css:dev', 'cssmin']);
//    grunt.registerTask('javascript:dev', ['jshint', 'concat']);
//    grunt.registerTask('javascript:dist', ['concat', 'uglify']);
//    grunt.registerTask('less:discovering', '', function() {
//        // SCSS Files management
//        // Source SCSS files are located inside : bundles/[bundle]/scss/
//        // Destination CSS files are located inside : built/[bundle]/scss/
//        var mappingFileLess = grunt.file.expandMapping(
//                ['less/**/*.less'],
//                'web/built/',
//                {
//                    cwd: 'web/built/',
//                    rename: function(dest, matchedSrcPath, options) {
//                        return dest + matchedSrcPath.replace(/less/g, 'css');
//                    }
//                });
//        grunt.util._.each(mappingFileLess, function(value) {
//            // Why value.src is an array ??
//            filesLess[value.dest] = value.src[0];
//        });
//    });
    grunt.registerTask('initDirectoryImages', '', function() {
        grunt.file.mkdir("web/built/images");
    });
};
