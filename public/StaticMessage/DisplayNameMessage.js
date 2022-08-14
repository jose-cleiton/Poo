"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageStandard_1 = __importDefault(require("./MessageStandard"));
class DisplayNameMessage extends MessageStandard_1.default {
    static set setMinCharacter(min) {
        this.minCharacter = min;
    }
    static setMessage() {
        this.errNumber = '400';
        this.msgName = '"displayName"';
    }
    static createMessage() {
        return Object.assign(Object.assign({}, super.createMessage()), { 'string.min': `${this.errNumber}|${this.msgName} ${this
                .characterLengthMessage(this.minCharacter)}` });
    }
    static characterLengthMessage(min) {
        return `length must be at least ${min} characters long`;
    }
    static get getMessage() {
        this.setMessage();
        return this.createMessage();
    }
}
exports.default = DisplayNameMessage;
DisplayNameMessage.minCharacter = 8;
console.clear();
console.log(DisplayNameMessage.getMessage);
