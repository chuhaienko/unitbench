/**
 *
 * @constructor
 */
function UnitBench()
{
    this.memory = {start: {}, end: {}};
    this.time = {};

    this.calculated = {};
}

/**
 *
 * @param {Number} times Кількість повторів
 * @param {Function} benchAction Функція, яку треба вимірювати
 * @param {Function} resCallback Кінцевий колбек, в нього віддається результат
 */
UnitBench.prototype.bench = function (times, benchAction, resCallback) {
	times = Number(times) || 1;
	if (typeof benchAction === 'function') {
		this.start();
		for (var i = 0; i < times; i++) {
			benchAction();
		}
		this.end();
	}
	if (typeof resCallback === 'function') {
		resCallback(this.delta());
	}
};

/**
 * Початок вимірювань
 */
UnitBench.prototype.start = function () {
    this.calculated = {};
    this.time.start = process.hrtime();
};

/**
 * Кінець вимірювань
 */
UnitBench.prototype.end = function () {
    this.time.end = process.hrtime();
};

/**
 * Повертає результат замірів
 * @returns {{time: {Number}, done: {Boolean}}}
 */
UnitBench.prototype.delta = function () {
    if(!this.calculated.done) {
        this.calculated.done = true;

        this.calculated = {
            time: Number(this.time.end[0] + '.' + this.time.end[1]) - Number(this.time.start[0] + '.' + this.time.start[1])
        };
    }
    return this.calculated;
};

UnitBench.prototype.compare = function (obj) {
    //todo: =
    var outObj = {};
    if(obj instanceof UnitBench) {
        outObj = {
            time: this.delta().time - obj.delta().time
        };
    } else {
        outObj = {
            time: this.delta().time
        };
    }
};

UnitBench.prototype.toConsole = function () {

};

module.exports = UnitBench;