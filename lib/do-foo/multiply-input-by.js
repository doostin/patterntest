module.exports = function(p_multiplier) {
	this.number = this.number ? this.number * p_multiplier : p_multiplier;
	return this;
};
