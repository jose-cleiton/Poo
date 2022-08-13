"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
const PagamentoBoleto_1 = __importDefault(require("./PagamentoBoleto"));
const keu = new Conta_1.default(150);
const pagamento = new PagamentoBoleto_1.default(new Date(), keu, 100, 'Pagamento de conta');
console.log(`Valor do pagamento: ${pagamento.valor}`);
console.log(`Valor da multa: ${pagamento.multa}`);
pagamento.pagar();
