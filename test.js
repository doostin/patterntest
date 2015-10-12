var Pattern = require("./index");

var config = {
	oneThing: "that",
	orAnother: "this"
};

var pattern = new Pattern(config);
var otherPattern = new Pattern();
var doFoo = pattern.doFoo();
var doBar = otherPattern.doBar();
var doBar2 = otherPattern.doBar();

otherPattern.config = {
	oneThing: "some",
	orAnother: "good"
};

otherPattern.someOtherConfig = {
	wacka: true,
	backa: [1,2,3,4,5]
};

doFoo.startNumber(4).add(3).add(5).multiplyInputBy(10).exec();

doBar.startNumber(3).add(17).multiplyInputBy(2).exec();

doBar2.startNumber(3).add(170).multiplyInputBy(2).exec();

pattern.doFoo({
	config: {
		something: true,
		else: false
	},
	number: 250
});
