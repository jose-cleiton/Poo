"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageStandard_1 = __importDefault(require("./MessageStandard"));
class Email extends MessageStandard_1.default {
    constructor() {
        super();
        this.name = '"email"';
        this.characterLength = 8;
        this.MUST_BE_A_VALID_EMAIL = 'must be a valid email';
    }
    createMessage() {
        this.errMessage = {
            'any.required': `${this.errNumber}|${this.name} ${this.requiredMessage}`,
            'string.email': `${this.errNumber}|${this.name} ${this.MUST_BE_A_VALID_EMAIL}`
        };
        return this.errMessage;
    }
    get getMessage() {
        return super.getMessage;
    }
}
console.clear();
const a = console.log(new Email().getMessage);
