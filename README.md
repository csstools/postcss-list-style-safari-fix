# PostCSS List Style Safari Fix [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS List Style Safari Fix] lets you remove list styles in CSS without
preventing VoiceOver from announcing them in Safari.

```pcss
nav ol, nav ul {
  list-style: none;
}

/* becomes */

nav ol, nav ul {
  list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
}
```

For more information about this Safari / VoiceOver bug, read
[VoiceOver and list-style-type: none](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/).

## Usage

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

[PostCSS List Style Safari Fix] runs in all Node environments, with special
instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-list-style-safari-fix.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-list-style-safari-fix
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-list-style-safari-fix.svg
[npm-url]: https://www.npmjs.com/package/postcss-list-style-safari-fix

[PostCSS]: https://github.com/postcss/postcss
[PostCSS List Style Safari Fix]: https://github.com/jonathantneal/postcss-list-style-safari-fix
