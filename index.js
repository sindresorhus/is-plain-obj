'use strict';
const {prototype, getPrototypeOf} = Object;
const {toString} = prototype;
const prototypes = new Set([null, prototype]);

module.exports = value =>
	toString.call(value) === '[object Object]' &&
	prototypes.has(getPrototypeOf(value));
