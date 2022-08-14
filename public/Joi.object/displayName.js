"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageStandard_1 = __importDefault(require("./MessageStandard"));
class JoiMessageDisplay extends MessageStandard_1.default {
    constructor(setCharacterLength) {
        super();
        this.name = '"displayName"';
        this.characterLength = setCharacterLength;
    }
    characterLengthMessage() {
        return super.characterLengthMessage();
    }
    createMessage() {
        return super.createMessage();
    }
    get getMessage() {
        return super.getMessage;
    }
}
console.clear();
const a = console.log(new JoiMessageDisplay(8).getMessage);
