"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JoiMessage_1 = __importDefault(require("./JoiMessage"));
class MessageStandard extends JoiMessage_1.default {
    constructor() {
        super();
        this.errNumber = '400';
        this.name = '"Standard"';
        this.characterLength = 8;
    }
    createMessage() {
        this.errMessage = {
            'any.required': `${this.errNumber}|${this.name} ${this.requiredMessage}`,
            'string.min': `${this.errNumber}|${this.name} ${this.characterLengthMessage()}`
        };
        return this.errMessage;
    }
    characterLengthMessage() {
        return `length must be at least ${this.characterLength} characters long`;
    }
    get getMessage() {
        return this.createMessage();
    }
}
exports.default = MessageStandard;
