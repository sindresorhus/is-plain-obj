import {expectType} from 'tsd';
import isPlainObj = require('.');

const foo = 'foo';

if (isPlainObj(foo)) {
	expectType<object>(foo);
}
