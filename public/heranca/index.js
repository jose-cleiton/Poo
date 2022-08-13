"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mammal_1 = __importDefault(require("./Mammal"));
const Bird_1 = __importDefault(require("./Bird "));
const tiger = new Mammal_1.default('Tigre', new Date(Date.parse('May 03, 2020')));
const main = (animal) => {
    console.log(animal.age);
};
main(tiger);
tiger.walk();
const parrot = new Bird_1.default('Papagaio', new Date(Date.parse('May 03, 2020')));
console.log(parrot.age);
parrot.fly();
/*
Saída (código rodado em Mar/2022):
1
Tigre está andando!
*/ 
