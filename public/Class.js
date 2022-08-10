"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccont {
    constructor(name, age) {
        console.clear();
        this._name = name;
        this._age = age;
    }
    logDetails() {
        console.log(`Name: ${this._name}, Age: ${this._age}`);
    }
    get getAge() {
        console.log('<----GET---->');
        return this._age;
    }
    set setAge(age) {
        this._age = age;
    }
}
const jose = new UserAccont('Jose', 20);
console.log(jose.getAge);
