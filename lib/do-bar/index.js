var _ = require("lodash");

module.exports = function(p_self) {
	_.merge(this, p_self);
	return this;
};

module.exports.prototype = {
	startNumber: function(p_number) {
		this.number = p_number;
		return this;
	},
	add: function(p_number) {
		this.number = this.number ? this.number + p_number : p_number;
		return this;
	},
	multiplyInputBy: function(p_multiplier) {
		this.number = this.number ? this.number * p_multiplier : p_multiplier;
		return this;
	},
	exec: function() {
		console.log("doBar:");
		console.log(this);
		return this;
	}
};
