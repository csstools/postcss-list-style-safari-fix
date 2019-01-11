# Installing PostCSS List Style Safari Fix

[PostCSS List Style Safari Fix] runs in all Node environments, with special
instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS List Style Safari Fix] to your project:

```bash
npm install postcss-list-style-safari-fix --save-dev
```

Use [PostCSS List Style Safari Fix] to process your CSS:

```js
const postcssListStyleSafariFix = require('postcss-list-style-safari-fix');

postcssListStyleSafariFix.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssListStyleSafariFix = require('postcss-list-style-safari-fix');

postcss([
  postcssListStyleSafariFix(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use [PostCSS List Style Safari Fix] in your `postcss.config.js` configuration
file:

```js
const postcssListStyleSafariFix = require('postcss-list-style-safari-fix');

module.exports = {
  plugins: [
    postcssListStyleSafariFix(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS List Style Safari Fix] in your Webpack configuration:

```js
const postcssListStyleSafariFix = require('postcss-list-style-safari-fix');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssListStyleSafariFix(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS List Style Safari Fix] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssListStyleSafariFix = require('postcss-list-style-safari-fix');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssListStyleSafariFix(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS List Style Safari Fix] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssListStyleSafariFix = require('postcss-list-style-safari-fix');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssListStyleSafariFix(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS List Style Safari Fix] in your Gruntfile:

```js
const postcssListStyleSafariFix = require('postcss-list-style-safari-fix');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssListStyleSafariFix(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS List Style Safari Fix]: https://github.com/jonathantneal/postcss-list-style-safari-fix
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
