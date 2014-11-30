
var instance;

function UnitBench()
{
    this.memory = {start: {}, end: {}};
    this.time = {};

    this.calculated = {};
}


UnitBench.prototype.start = function () {
    this.calculated = {};
    this.time.start = process.hrtime();
};

UnitBench.prototype.end = function () {
    this.time.end = process.hrtime();
};

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