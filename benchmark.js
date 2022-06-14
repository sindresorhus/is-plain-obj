import {inspect} from 'node:util';
import isPlainObject from 'is-plain-obj';

const runBenchmarks = () => {
	for (const value of values) {
		const name = value instanceof Error ? String(Error) : inspect(value);
		const paddedName = name.padEnd(50);
		console.time(paddedName);
		runLoop(value);
		console.timeEnd(paddedName);
	}
};

const runLoop = value => {
	for (let index = 0; index < 1e8; index += 1) {
		isPlainObject(value);
	}
};

const values = [
	undefined,
	0,
	0n,
	'',
	true,
	Symbol(''),
	() => {},
	// eslint-disable-next-line func-names
	(function namedFunc() {}),
	null,
	{},
	Math,
	new Set([]),
	new ArrayBuffer(0),
	Promise.resolve(),
	Object.create(null),
	new Intl.Locale('en'),
	// eslint-disable-next-line no-new-object
	new Object({prop: true}),
	new class Class {}(),
	[],
	/regexp/,
	new Error('test'),
	new Date(),
	(function () {
		// eslint-disable-next-line prefer-rest-params
		return arguments;
	})(),
	new Proxy({}, {})
];

// Warm up
runLoop({});

runBenchmarks();
