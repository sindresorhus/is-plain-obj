import {expectType} from 'tsd';
import isPlainObject = require('.');

const foo = {foo: 'bar'};

if (isPlainObject(foo)) {
	expectType<Record<string | number | symbol, unknown>>(foo);
}
