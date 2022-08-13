"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamentos {
    constructor(conta, valor, tipo, vencimento, decricao, multa = 0.2) {
        this._conta = conta;
        this._valor = valor;
        this._tipo = tipo;
        this._venciemnto = vencimento;
        this._decricao = decricao || 'Pagamento';
        this._multa = multa;
        this._prestacao = [];
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
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get venciemnto() {
        return this._venciemnto;
    }
    set venciemnto(venciemnto) {
        this._venciemnto = venciemnto;
    }
    get decricao() {
        return this._decricao;
    }
    set decricao(decricao) {
        this._decricao = decricao;
    }
    get multa() {
        return this._multa;
    }
    set prestacao(prestacao) {
        if (prestacao.length > 10) {
            throw new Error('Maximo de prestacoes permitidas é de 10x');
        }
        this._prestacao = prestacao;
    }
    get prestacao() {
        return this._prestacao;
    }
    calcularPrestacao(prestacao) {
        this._prestacao.push(prestacao);
    }
}
exports.default = Pagamentos;
