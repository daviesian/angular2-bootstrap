var path = require("path");
var Builder = require('systemjs-builder');

if (process.argv[2] == "vendor") {
    // Bundle the dependencies of our app into a single file, vendor.js
    var src = './src/ts/**/*.ts - [./src/ts/**/*.ts]';
    var dest = './dist/js/vendor.js';
    var opts = {
        minify: true,
        sourceMaps: false
    };
} else if (process.argv[2] == "app") {
    // Bundle just our app into a single file, app.js. Do not include dependencies.
    var src = '[./src/ts/**/*.ts]';
    var dest = './dist/js/app.js';
    var opts = {
        minify: true,
        sourceMaps: true
    };
} else {
    throw new Error("Must specify 'vendor' or 'app' bundle to build.")
}

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('.', 'system.config.js');

builder
    .bundle(src, dest, opts)
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.error(err);
    });