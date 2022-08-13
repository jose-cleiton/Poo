"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamentos {
    constructor(conta, valor, decricao) {
        console.clear();
        this._conta = conta;
        this._valor = valor;
        this._decricao = decricao || 'Pagamento';
    }
    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }
    get valor() {
        return this._valor;
    }
    set valor(valor) {
        this._valor = valor;
    }
    get decricao() {
        return this._decricao;
    }
    set decricao(decricao) {
        this._decricao = decricao;
    }
}
exports.default = Pagamentos;
