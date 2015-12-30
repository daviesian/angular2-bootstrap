// Configure the SystemJS framework.
// Note that this config is used for on-the-fly compilation in the browser
// and also for building production bundles with build.js

System.config({

    // This section configures the TypeScript compiler.
    transpiler: 'typescript',
    typescriptOptions: {
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
    },

    // Configure default extensions so we can use old-style imports.
    packages: {
        app: {
            defaultExtension: 'ts'
        },
        angular2: {
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        },
    },

    // Allow us to refer to some packages with short aliases.
    // Some of these are essential - angular2 often imports 'rxjs/...' for example.
    map: {
        app: 'src/ts',
        angular2: 'node_modules/angular2',
        rxjs: 'node_modules/rxjs',
        typescript: 'node_modules/typescript/lib/typescript.js',
        jquery: 'node_modules/jquery/dist/jquery.min.js',
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
        tether: 'node_modules/tether/dist/js/tether.min.js',
        reflect: 'node_modules/reflect-metadata/Reflect.js',
    },

    // Define any dependencies of legacy libraries, and make sure some are imported globally.
    meta: {
        'typescript': {
            deps: ['reflect'],
        },
        'reflect': {
            format: "global",
        },
        'tether': {
            format: "global",
        },
        'bootstrap': {
            deps: ['tether', 'jquery'],
        },
        'app/*': {
            deps: ['bootstrap'],
        }
    }
});