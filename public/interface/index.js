"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_1 = __importDefault(require("./Bird "));
const parrot = new Bird_1.default('Papagaio', new Date(Date.parse('Aug 16, 2015')));
console.log(parrot.age);
parrot.fly();
/*
Saída (código executado em Mar/2022):
6
Papagaio está voando!
*/ 
