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

    function setTarget(name:string) {
        grunt.config.set('target', targets[name]);
    }

    function ifTarget(name:string, then:any, els:any = false) {
        return () => grunt.config('target').name == name ? then : els;
    }

    var config = {
        pkg: fs.readJSONSync('package.json'),

        target : targets[grunt.option('target') || 'dev'],
        targets: targets,

        clean: {
            all  : {src: '<%= target.dest %>'},
            views: {src: '<%= target.dest %>/**/*.html'}
        },

        copy : {
            images      : {cwd: 'src/images', src: ['**'], dest: '<%= target.dest %>/assets/images/', expand: true},
            js          : {cwd: 'src/js', src: ['**/*.js'], dest: '<%= target.dest %>/assets/scripts/', expand: true},
            systemConfig: {cwd: '', src: ['system.config.js'], dest: '<%= target.dest %>/', expand: true},
            jspm        : {cwd: '', src: ['jspm_packages/**/*', 'system.config.js'], dest: '<%= target.dest %>/', expand: true},
        },

        jade : {
            options: {
                pretty: true, data: (() => {
                    return _.merge({}, {
                        _       : _,            // pass lodash to jade, always usefull at some point
                        _inspect: util.inspect,
                        _target : '<%= target %>',       // current grunt target data
                        baseHref: '/'           // base href
                    });
                })()
            },
            app    : {files: [{expand: true, cwd: 'src', src: ['**/*.jade', '!**/_*.jade'], ext: '.html', dest: '<%= target.dest %>/'}]}
        },

        sass: {
            options: {sourceMap: ifTarget('dev', true), outputStyle: ifTarget('dev', 'expanded', 'compressed')},
            app    : {files: [{expand: true, cwd: 'src', src: ['**/*.{sass,scss}'], ext: '.css', dest: '<%= target.dest %>/'}]},
        },

        ts  : {
            options: {compiler: 'node_modules/typescript/bin/tsc', target: 'ES5', module: 'commonjs', emitError: true, sourceMap: ifTarget('dev', true), experimentalDecorators: true},
            app    : {
                options: {declaration: false},
                src    : ['src/app/**/*.ts', 'src/app/init.ts', 'src/app/typings.d.ts'],
                outDir : '<%= target.dest %>/app'
            }
        },

        systemjs: {
            options: {
                baseURL: "./<%= target.dest %>", configFile: "./<%= target.dest %>/system.config.js",
                sfx    : true, minify: true, build: {mangle: false}
            },
            app    : {files: [{"src": "./<%= target.dest %>/app/init.js", "dest": "./<%= target.dest %>/app/init.js"}]}
        },

        injector: {
            options: {
                starttag: '<!-- injector:{{ext}}-->', // removed space as jade does that aswell.
                endtag  : '<!-- endinjector-->',
            },
            app    : {
                files: {
                    './<%= target.dest %>/index.html': ['jspm_packages/system.src.js', 'system.config.js'],
                }
            },
            js     : {}
        },

        bytesize: {app: {src: ['<%= targets.dist.dest %>/app/init.js']}},

        connect : {dev: {options: {port: 8000, livereload: false, base: 'dev'}}},

        watch: {
            options   : {livereload: true},
            ts        : {files: '<%= ts.app.src %>', tasks: ['ts:app']},
            sass      : {files: '<%= sass.app.files.0.src %>', tasks: ['sass:app']},
            jade      : {files: '<%= jade.app.files.0.src %>', tasks: ['ts:app']},
            livereload: {
                options: {livereload: 35729},
                files  : ['<%= target.dest %>/**/*', '!<%= target.dest %>/assets/{bower_components,jspm_packages}/**/*']
            }
        }
    };

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig(config);

    [
        ['default', 'Default task', ['build']],
        ['build', 'Build dev', ['clean:all', 'jade:app', 'jspm', 'sass:app', 'ts:app', 'injector:app']],
        ['dist', 'Build dist', ['target:dist', 'build', 'systemjs:app', 'bytesize:app']],
        ['serve', 'Create a server and start watching files for changes', ['connect:dev', 'watch']],


        ['target', 'Set target trough task', function (targ) {
            setTarget(targ);
        }],
        ['jspm', 'Link or copy the jspm_packages folder to the target destination', () => {
            var target = grunt.config('target');
            grunt.log.ok('JSPM for target:' + JSON.stringify(target));
            var task = target.name === 'dev' ? 'link:jspm' : 'copy:jspm';
            !fs.existsSync(target.name) && fs.mkdirpSync(target.name);
            grunt.task.run(task);
        }],
        ['link', 'Create a symlink into the target from the project dir', function (opt) {
            var target = grunt.config('target');

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
            }

            if (opt === 'bower') {
                makeLink('bower_components');
            } else if (opt === 'jspm') {
                makeLink('jspm_packages');
                makeLink('system.config.js');
            }
        }],
    ].forEach(function (simpleTask) {
        grunt.registerTask(simpleTask[0], simpleTask[1], simpleTask[2]);
    }.bind(this));

    fs.existsSync('tmp') && fs.removeSync('tmp');


    //console.log(util.inspect(grunt.config.get('ts'), { colors: true }))
}
