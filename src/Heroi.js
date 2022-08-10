"use strict";
var Heroi = /** @class */ (function () {
    function Heroi(name, power, age) {
        this._name = name;
        this._power = power;
        this._age = age;
    }
    Object.defineProperty(Heroi.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (!name)
                throw new Error('Name is required');
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heroi.prototype, "power", {
        set: function (power) {
            this._power = power;
        },
        enumerable: false,
        configurable: true
    });
    return Heroi;
}());
