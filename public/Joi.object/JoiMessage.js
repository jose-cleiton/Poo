"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JoiMessage {
    constructor() {
        this.errNumber = '';
        this.name = '';
        this.requiredMessage = 'is required';
        this.characterLength = 8;
        this.errMessage = {};
    }
}
exports.default = JoiMessage;
