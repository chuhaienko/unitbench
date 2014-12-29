var Bench = require('./index.js');

var b = new Bench();
b.bench(1e6,
	function () {
		var x = Math.random().toString().split('5').reverse();
	},
	function (result) {
		console.log(result);
	}
);

b.bench(1e6,
	function () {
		var x = Math.random().toString().split('').reverse();
	},
	function (result) {
		console.log(result);
	}
);