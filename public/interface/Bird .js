"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bird {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    get age() {
        var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
    getBirthDate() { return this.birthDate; }
    fly() { console.log(`${this.name} está voando!`); }
}
exports.default = Bird;
