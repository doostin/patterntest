var _ = require("lodash");

module.exports = function(p_self) {
	_.merge(this, p_self);
	return this;
};

module.exports.prototype = {
	startNumber: require("./start-number"),
	add: require("./add"),
	multiplyInputBy: require("./multiply-input-by"),
	exec: require("./exec")
};
