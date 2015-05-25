'use strict';
var isPng = require('is-png');
var test = require('ava');
var screenshotPromise = require('./');

test('generate screenshot', function (t) {
	t.plan(1);

	screenshotPromise('http://yeoman.io', '1024x768')
		.then(function (buf) {
			t.assert(isPng(buf));
		});
});
