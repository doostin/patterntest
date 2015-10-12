module.exports = function(p_number) {
	this.number = this.number ? this.number + p_number : p_number;
	return this;
};
