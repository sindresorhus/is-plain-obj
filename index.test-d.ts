import {expectType} from 'tsd';
import isPlainObject = require('.');

const foo = 'foo';

if (isPlainObject(foo)) {
	expectType<object>(foo);
}
