# screenshot-promise [![Build Status](https://travis-ci.org/kevva/screenshot-promise.svg?branch=master)](https://travis-ci.org/kevva/screenshot-promise)

> Promise wrapper around [screenshot-stream](https://github.com/kevva/screenshot-stream)


## Install

```
$ npm install --save screenshot-promise
```


## Usage

```js
var fs = require('fs');
var screenshotPromise = require('screenshot-promise');

screenshotPromise('http://google.com', '1024x768', {crop: true})
	.then(function (buf) {
		fs.writeFileSync('google.com-1024x768.png', buf);
	});
```


## API

Same as in [screenshot-stream](https://github.com/kevva/screenshot-stream), but with promisified methods.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
