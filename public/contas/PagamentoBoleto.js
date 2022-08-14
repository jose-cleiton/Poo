"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const Pagamentos_1 = __importDefault(require("./Pagamentos"));
class PagamentoBoleto extends Pagamentos_1.default {
    constructor(vencimento, conta, valor, decricao) {
        super(conta, valor, decricao);
        this._prestacoes = [];
        this._vencimento = vencimento;
        this._multa = 0.2;
        this._prestacoes = [];
    }
    set vencimento(vencimento) {
        this._vencimento = vencimento;
    }
    get vencimento() {
        return this._vencimento;
    }
    set multa(multa) {
        this._multa = multa;
    }
    get multa() {
        return this._multa;
    }
    estaVencido() {
        return (0, date_fns_1.isBefore)(this._vencimento, new Date());
    }
    pagar() {
        console.log('Pagamento Boleto');
        console.log(`Saldo: ${this.conta.saldo}`);
        console.log(`Dados do boleto:`);
        console.log(`Descrição: ${this.decricao}`);
        console.log(`Vencimento: ${this.vencimento}`);
        console.log(`Multa: ${this.multa}`);
        console.log(`Processando pagamento...`);
        console.log(`Pagamento efetuado com sucesso!`);
        ;
        if (this.estaVencido()) {
            this.valor = this.valor + (this.valor * this.multa);
        }
        this.conta.debito(this.valor);
        console.log(`Saldo: ${this.conta.saldo}`);
    }
}
exports.default = PagamentoBoleto;
