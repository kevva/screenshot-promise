import isPng from 'is-png';
import test from 'ava';
import m from './';

test('generate screenshot', async t => {
	t.true(isPng(await m('http://yeoman.io', '1024x768')));
});
