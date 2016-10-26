# screenshot-promise [![Build Status](https://travis-ci.org/kevva/screenshot-promise.svg?branch=master)](https://travis-ci.org/kevva/screenshot-promise)

> Promise wrapper around [screenshot-stream](https://github.com/kevva/screenshot-stream)


## Install

```
$ npm install --save screenshot-promise
```


## Usage

```js
const fs = require('fs');
const screenshotPromise = require('screenshot-promise');

screenshotPromise('http://google.com', '1024x768', {crop: true}).then(buf => {
	fs.writeFileSync('google.com-1024x768.png', buf);
});
```


## API

See [screenshot-stream](https://github.com/kevva/screenshot-stream).


## License

MIT © [Kevin Martensson](https://github.com/kevva)
