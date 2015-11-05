'use strict';
var test = require('ava');
var fn = require('./');

function Foo(x) {
	this.x = 1;
}

function ObjectConstructor() {
}

ObjectConstructor.prototype.constructor = Object;

test(function (t) {
	t.assert(fn({}));
	t.assert(fn({foo: true}));
	t.assert(fn({constructor: Foo}));
	t.assert(fn({valueOf: 0}));
	t.assert(fn(Object.create(null)));
	t.assert(fn(new Object()));
	t.assert(!fn(arguments));
	t.assert(!fn(['foo', 'bar']));
	t.assert(!fn(new Foo(1)));
	t.assert(!fn(Math));
	t.assert(!fn(Error));
	t.assert(!fn(function () {}));
	t.assert(!fn(/./));
	t.assert(!fn(null));
	t.assert(!fn(undefined));
	t.assert(!fn(NaN));
	t.assert(!fn(''));
	t.assert(!fn(0));
	t.assert(!fn(false));
	t.assert(!fn(new ObjectConstructor()));
	var foo = new Foo();
	foo.constructor = Object;
	t.assert(!fn(foo));
	t.end();
});
