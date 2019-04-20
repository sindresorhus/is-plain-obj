'use strict';

module.exports = candidate => {
	if (Object.prototype.toString.call(candidate) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(candidate);
	return prototype === null || prototype === Object.getPrototypeOf({});
};
