import test from 'ava';
import isPlainObject from './index.js';
import {runInNewContext} from 'vm';

function Foo(x) {
	this.x = x;
}

function ObjectConstructor() {}

ObjectConstructor.prototype.constructor = Object;

test('main', t => {
	t.true(isPlainObject({}));
	t.true(isPlainObject({foo: true}));
	t.true(isPlainObject({constructor: Foo}));
	t.true(isPlainObject({valueOf: 0}));
	t.true(isPlainObject(Object.create(null)));
	t.true(isPlainObject(new Object())); // eslint-disable-line no-new-object
	t.true(isPlainObject(runInNewContext('({})')));
	t.false(isPlainObject(['foo', 'bar']));
	t.false(isPlainObject(new Foo(1)));
	t.false(isPlainObject(Math));
	t.false(isPlainObject(JSON));
	t.false(isPlainObject(Atomics));
	t.false(isPlainObject(Error));
	t.false(isPlainObject(() => {}));
	t.false(isPlainObject(/./));
	t.false(isPlainObject(null));
	t.false(isPlainObject(undefined));
	t.false(isPlainObject(Number.NaN));
	t.false(isPlainObject(''));
	t.false(isPlainObject(0));
	t.false(isPlainObject(false));
	t.false(isPlainObject(new ObjectConstructor()));
	t.false(isPlainObject(Object.create({})));

	(function () {
		t.false(isPlainObject(arguments)); // eslint-disable-line prefer-rest-params
	})();

	const foo = new Foo();
	foo.constructor = Object;
	t.false(isPlainObject(foo));
});
