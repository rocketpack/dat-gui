var common = require('../utils/common');

module.exports = function(object, property, args) {
    var initialValue = object[property];

    if (common.isArray(args[0]) || common.isObject(args[0])) {
        return 'option'
    }

    if (common.isNumber(initialValue)) {
        if (common.isNumber(args[0]) && common.isNumber(args[1])) {
            return 'numberSlider';
		} else {
			return 'numberBox';
		}
	}
    if (common.isString(initialValue)) {
        return 'string';
    }

    if (common.isFunction(initialValue)) {
        return 'function';
    }

    if (common.isBoolean(initialValue)) {
        return 'boolean';
    }
}
