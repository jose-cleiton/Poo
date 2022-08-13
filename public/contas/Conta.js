"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(saldo) {
        this._saldo = saldo;
    }
    debito(valor) {
        if (this._saldo < valor) {
            throw new Error('Saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
}
exports.default = Conta;
