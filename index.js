'use strict';
var getStream = require('get-stream');
var screenshotStream = require('screenshot-stream');

module.exports = function (url, size, opts) {
	return getStream.buffer(screenshotStream(url, size, opts));
};
