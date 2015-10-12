module.exports = function exec(p_options) {
	var _self = this;
	if (p_options) {
		_self = p_options;
	}
	console.log("doFoo:");
	console.log(_self);
	return _self;
};
