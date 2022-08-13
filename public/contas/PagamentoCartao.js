"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pagamentos_1 = __importDefault(require("./Pagamentos"));
class PagamentoCartao extends Pagamentos_1.default {
    pagar() {
        console.log('Pagamento Boleto');
        console.log(`Saldo: ${this.conta.saldo}`);
        console.log(`Descrição: ${this.decricao}`);
        console.log(`Vencimento: ${this.valor}`);
        console.log(`Processando pagamento...`);
        console.log(`Pagamento efetuado com sucesso!`);
        ;
        this.conta.debito(this.valor);
        console.log(`Saldo: ${this.conta.saldo}`);
    }
}
exports.default = PagamentoCartao;
