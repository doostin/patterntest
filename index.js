var DoFoo = require("./lib/do-foo");
var DoBar = require("./lib/do-bar");

module.exports = function Pattern(p_config) {
	this.config = p_config;
};

module.exports.prototype = {
	doBar: function doBar() {
		var _self = this;
		return new DoBar(_self);
	},
	doFoo: function doFoo(p_options) {
		var _self = this;
		var exec = require("./lib/do-foo/exec");

		if (p_options) {
			return exec(p_options);
		}

		return new DoFoo(_self);
	}
};
