# Angular2-bootstrap
### Powered by Angular 2, Bootstrap 4, SystemJS and NPM

This project provides a quick-start framework for building Angular 2 apps, with sensible development and production
workflows.

### Prerequisites

* Node and NPM
* Nothing else.

### File structure

```
- angular2-bootstrap
  |- dist                    [Build artifact, not in git]
  |  |- css               
  |  |  |- app.css      
  |  |  |- app.css.map      
  |  |       
  |  |- js            
  |  |  |- app.js      
  |  |  |- vendor.js        
  |
  |- src
  |  |- scs
  |  |  |- app.scss
  |  |  |- _bootstrap_variables.scss
  |  |
  |  |- ts
  |  |  |- .gitignore
  |  |  |- app.component.ts
  |  |  |- boot.ts
  |
  |- .gitignore
  |- build.js
  |- index.html
  |- package.json
  |- README.md
  |- system.config.js
  |- tsconfig.json
```

The most important folder is the `src` folder - this contains all the source for your app:

* __CSS__ - Compiled from SASS. `app.scss` imports the Bootstrap4 scss directly. 
Configure Bootstrap by setting variables in `_bootstrap_variables.scss`.

* __TypeScript__ - Angular 2 is written in [__TypeScript__](http://www.typescriptlang.org/), which offers many benefits over plain JS.
`boot.ts` simply tells Angular how to load your app in the browser, while `app.component.js` contains the single Angular 2 Component defined in this project so far. Note that no Angular scripts are explicitly included on our page - they are compiled in as required by the TypeScript compiler.
`.gitignore` is included in this directory because some IDEs will compile the TypeScript on-the-fly, adding JS files to this directory that can be safely ignored and discarded. More on that below.

### Development

To work on this project, simply run `npm install` and then `npm start` in the `angular2-bootstrap` directory. The app will load in your browser and automatically refresh whenever any source files change.

`npm start` runs several scripts to achieve this, all of which are available individually on the command line. In no particular order:

* `npm run lite` starts the [lite-server](https://github.com/johnpapa/lite-server), which plays nicely with Angular 2 HTML5 routing.
* `npm run sass` compiles the scss to css, creating `dist/css/app.css` and matching source map.
* `npm run sass:w` as above, but watches source files for changes and recompiles as necessary.

Compiling SASS is all that is required to run the app. SystemJS will take care of loading and compiling TypeScript on-the-fly in the browser as required.
You will notice that this takes a while and can make your app quite slow to develop. And we certainly don't want to do that in production.

The [SystemJS builder](https://github.com/systemjs/builder) comes to the rescue, allowing us to bundle all our code into a single minified JS file. To speed up development and avoid recompiling our app on every change, this project uses two bundles:

* `dist/js/vendor.js` - Contains all the third-party dependencies for our app, but excludes our app itself.
* `dist/js/app.js` - Contains just our app, without any third-party dependencies. Only for use in production.

Again, note that neither of these bundles is required to run the app, they just speed things up.

The `build.js` script creates these bundles:

* `node build.js vendor` builds `vendor.js`
* `node build.js app` builds `app.js`

`npm start` will automatically build the `vendor` bundle once on startup, but leave the app itself alone.

To understand more about the use of SystemJS in this project, see `system.config.js`.

### IDE

[IntelliJ IDEA](https://www.jetbrains.com/idea/) provides an excellent environment for developing Angular 2 apps. The Ultimate edition (free for personal use) will compile TypeScript on-the-fly and provide useful help. For this to work, point IntelliJ to the `.tsconfig` file in the root folder when it asks.


