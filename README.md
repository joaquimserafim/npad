# pad

[![Build Status](https://travis-ci.org/joaquimserafim/pad.png?branch=master)](https://travis-ci.org/joaquimserafim/pad)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/pad/blob/master/LICENSE)

### Instalation
```bash

```


### Usage
```js

var pad = require('pad')

console.log(pad.left('foo', 5)) // print `  foo`
console.log(pad.right('bar', 10, '.')) // print `bar.......`

```

### Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
```js
npm test
```

to run jshint
```js
npm run lint
```

to run code style
```js
npm run style
```

to run code coverage
``` js
npm run coverage
```

to open the code coverage report
```js
npm run coverage:open
```
