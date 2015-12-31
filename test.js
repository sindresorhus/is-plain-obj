import test from 'ava';
import m from './';

function Foo(x) {
	this.x = 1;
}

function ObjectConstructor() {}

ObjectConstructor.prototype.constructor = Object;

test(t => {
	t.true(m({}));
	t.true(m({foo: true}));
	t.true(m({constructor: Foo}));
	t.true(m({valueOf: 0}));
	t.true(m(Object.create(null)));
	t.true(m(new Object()));
	t.false(m(arguments));
	t.false(m(['foo', 'bar']));
	t.false(m(new Foo(1)));
	t.false(m(Math));
	t.false(m(Error));
	t.false(m(() => {}));
	t.false(m(/./));
	t.false(m(null));
	t.false(m(undefined));
	t.false(m(NaN));
	t.false(m(''));
	t.false(m(0));
	t.false(m(false));
	t.false(m(new ObjectConstructor()));
	const foo = new Foo();
	foo.constructor = Object;
	t.false(m(foo));
});
