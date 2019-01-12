'use strict';

module.exports = input => {
	if (Object.prototype.toString.call(input) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(input);
	return prototype === null || prototype === Object.getPrototypeOf({});
};
