'use strict';
var screenshotStream = require('screenshot-stream');
var streamToPromise = require('stream-to-promise');

module.exports = function (url, size, opts) {
	opts = opts || {};
	return streamToPromise(screenshotStream(url, size, opts));
};
