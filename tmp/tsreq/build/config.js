var fs_1 = require('fs');
var yargs_1 = require('yargs');
var resolve = require.resolve;
// --------------
// Configuration.
exports.ENV = yargs_1.argv['env'] || 'dev';
exports.DEBUG = yargs_1.argv['debug'] || false;
exports.PORT = yargs_1.argv['port'] || 5555;
exports.LIVE_RELOAD_PORT = yargs_1.argv['reload-port'] || 4002;
exports.APP_BASE = yargs_1.argv['base'] || '/';
exports.APP_SRC = 'app';
exports.APP_DEST = 'dist';
exports.ANGULAR_BUNDLES = './node_modules/angular2/bundles';
exports.VERSION = version();
exports.PATH = {
    cwd: process.cwd(),
    tools: 'tools',
    dest: {
        all: exports.APP_DEST,
        dev: {
            all: exports.APP_DEST + "/" + exports.ENV,
            lib: exports.APP_DEST + "/" + exports.ENV + "/lib",
            css: exports.APP_DEST + "/" + exports.ENV + "/css",
            fonts: exports.APP_DEST + "/" + exports.ENV + "/fonts"
        },
        test: 'test',
        tmp: '.tmp'
    },
    src: {
        all: exports.APP_SRC,
        jslib_inject: [
            // Order is quite important here for the HTML tag injection.
            resolve('es6-shim/es6-shim.min.js'),
            resolve('es6-shim/es6-shim.map'),
            resolve('reflect-metadata/Reflect.js'),
            resolve('reflect-metadata/Reflect.js.map'),
            resolve('systemjs/dist/system.src.js'),
            (exports.APP_SRC + "/system.config.js"),
            (exports.ANGULAR_BUNDLES + "/angular2.dev.js"),
            (exports.ANGULAR_BUNDLES + "/router.dev.js"),
            (exports.ANGULAR_BUNDLES + "/http.dev.js")
        ],
        jslib_copy_only: [
            resolve('systemjs/dist/system-polyfills.js'),
            resolve('systemjs/dist/system-polyfills.js.map')
        ],
        csslib: [
            resolve('bootstrap/dist/css/bootstrap.css'),
            resolve('bootstrap/dist/css/bootstrap.css.map')
        ],
        fonts: [
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.eot'),
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.svg'),
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'),
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.woff'),
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.woff2')
        ]
    }
};
// --------------
// Private.
function version() {
    var pkg = JSON.parse(fs_1.readFileSync('package.json').toString());
    return pkg.version;
}
