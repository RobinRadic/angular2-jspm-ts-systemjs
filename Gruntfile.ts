///<reference path='typings/tsd/tsd.d.ts'/>
import * as fs from 'fs-extra';
import * as path from 'path'
import * as _ from 'lodash';
import * as util from 'util';

export = function (grunt) {

    var targets = {
        dist: {name: 'dist', dest: 'dist'},
        dev : {name: 'dev', dest: 'dev'}
    };

    var target  = targets[grunt.option('target') || 'dev'];

    var config = {
        pkg: fs.readJSONSync('package.json'),

        target : target,
        targets: targets,

        clean: {
            all              : {src: '<%= target.dest %>'},
            docs             : {src: '<%= target.dest %>/docs'},
            assets           : {src: '<%= target.dest %>/assets'},
            styles           : {src: '<%= target.dest %>/assets/styles'},
            scripts          : {src: '<%= target.dest %>/assets/scripts'},
            scripts_no_vendor: {src: ['<%= target.dest %>/assets/scripts/**/*.js', '!<%= target.dest %>/assets/scripts/vendor.min.js']},
            images           : {src: '<%= target.dest %>/assets/images'},
            bower            : {src: '<%= target.dest %>/assets/bower_components'},
            views            : {src: '<%= target.dest %>/**/*.html'}
        },
        copy : {
            images: {cwd: 'src/images', src: ['**'], dest: '<%= target.dest %>/assets/images/', expand: true},
            bower : {cwd: 'bower_components', src: ['**/*.{js,css,woff*,ttf,swf}'], dest: '<%= target.dest %>/assets/bower_components/', expand: true},
            js    : {cwd: 'src/js', src: ['**/*.js'], dest: '<%= target.dest %>/assets/scripts/', expand: true},
            //angular_bundles: {cwd: 'node_modules/angular2/bundles', src: ['**/*.{js,js.map}'], dest: '<%= target.dest %>/assets/angular2', expand: true},
            jspm  : {cwd: '', src: ['jspm_packages/**/*', 'system.config.js'], dest: '<%= target.dest %>/assets/', expand: true},
        },
        jade : {
            options: {
                pretty: true, data: (() => {
                    return _.merge({}, {
                        _       : _,
                        _inspect: util.inspect,
                        _target : target
                    });
                })()
            },
            app    : {files: [{expand: true, cwd: 'src', src: ['**/*.jade', '!**/_*.jade'], ext: '.html', dest: '<%= target.dest %>/'}]}
        },

        sass    : {
            options: {sourceMap: '<%= target.name === "dev" %>', outputStyle: '<%= target.name === "dev" ? "expanded" : "compressed" %>'},
            app    : {files: [{expand: true, cwd: 'src', src: ['**/*.{sass,scss}'], ext: '.css', dest: '<%= target.dest %>/'}]},
        },
        ts      : {
            options: {compiler: 'node_modules/typescript/bin/tsc', target: 'ES5', module: 'commonjs', emitError: true, sourceMap: '<%= target.name === "dev" %>', experimentalDecorators: true},
            app    : {
                options: {declaration: false},
                src    : ['src/app/**/*.ts', 'src/main.ts'],
                outDir : '<%= target.dest %>/'
            }
        },
        usemin  : {},
        systemjs: {},

        injector: {
            options: {
                // Task-specific options go here.
            },
            app    : {
                files: {
                    'dev/index.html': [
                        'jspm_packages/system.src.js',
                        'system.config.js'],
                }
            },
            js     : {}
        },

        connect: {dev: {options: {port: 8000, livereload: false, base: 'dev'}}},
        watch  : {
            options: {livereload: true},
            ts  : {files: '<%= ts.app.src %>', tasks: ['ts:app']},
            sass: {files: '<%= sass.app.files.0.src %>', tasks: ['sass:app']},
            jade: {files: '<%= jade.app.files.0.src %>', tasks: ['ts:app']},
            livereload : {
                options: {livereload: 35729},
                files  : ['<%= target.dest %>/**/*', '!<%= target.dest %>/assets/{bower_components,jspm_packages}/**/*']
            }
            //copy: { files: '<%= ts.app.src %>', tasks: ['ts:app'] },
//            minify: { files: '<%= ts.app.src %>', tasks: ['ts:app'] },
//            inject: { files: '<%= ts.app.src %>', tasks: ['ts:app'] },
//            inject: { files: '<%= ts.app.src %>', tasks: ['ts:app'] },
        }
    };

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig(config);

    grunt.log.ok(JSON.stringify(grunt.config.get('injector.app.files')));
    [
        ['default', 'Default task', ['']],
        ['build', 'Build it', ['clean:all', (target.name === 'dev' ? 'link:jspm' : 'copy:jspm'), 'jade:app', 'sass:app', 'ts:app', 'injector:app']],
        ['serve', '', ['connect:dev', 'watch']],
        ['link', '', function (opt) {
            function makeLink(to) {
                var cwd = process.cwd();
                grunt.log.ok(cwd);
                process.chdir(target.dest);
                var relPath = path.relative(
                    process.cwd(),
                    path.join(cwd, to)
                );
                if (fs.existsSync(path.join(process.cwd(), to))) {
                    grunt.log.warn('skipping ' + to + ' - already exists')
                } else {
                    fs.symlinkSync(relPath, to);
                    grunt.log.ok('symlink created: ' + relPath + ' -> ' + path.join(target.dest, 'assets', to));
                }
                process.chdir(cwd);
            };

            if (opt === 'bower') {
                makeLink('bower_components');
            }

        }],
    ].forEach(function (simpleTask) {
        grunt.registerTask(simpleTask[0], simpleTask[1], simpleTask[2]);
    }.bind(this));

    fs.existsSync('tmp') && fs.removeSync('tmp');
}
