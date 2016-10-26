'use strict';
const getStream = require('get-stream');
const screenshotStream = require('screenshot-stream');

module.exports = (url, size, opts) => getStream.buffer(screenshotStream(url, size, opts));
