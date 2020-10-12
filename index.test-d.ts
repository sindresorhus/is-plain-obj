import {expectAssignable} from 'tsd';
import isPlainObject = require('.');

const foo = 'foo';

if (isPlainObject(foo)) {
	expectAssignable<Record<string, unknown>>(foo);
	expectAssignable<Record<number, unknown>>(foo);
	expectAssignable<Record<symbol, unknown>>(foo);
	expectAssignable<Record<string | symbol, unknown>>(foo);
}
