var Bench = require('./index.js');

var b1 = new Bench();

b1.start();
for (var i = 0; i < 10000000; i++) {
        var x = Math.random();
}
b1.end();
console.log(b1.delta());