"use strict";
class Heroi {
    constructor(name, power, age) {
        this._name = name;
        this._power = power;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (!name)
            throw new Error('Name is required');
        this._name = name;
    }
    set power(power) {
        this._power = power;
    }
}
const id = '123';
const player = {
    name: 'Thiago',
    level: 1,
    id: id,
    nickName: 'Thiago'
};
console.clear();
console.log(player);
