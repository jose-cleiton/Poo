"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
const PagamentoBoleto_1 = __importDefault(require("./PagamentoBoleto"));
const PagamentoCartao_1 = __importDefault(require("./PagamentoCartao"));
const keu = new Conta_1.default(150);
const pagamento = new PagamentoBoleto_1.default(new Date(), keu, 20, 'Pagamento de conta');
const pagamentoCartao = new PagamentoCartao_1.default(keu, 100, 'Pagamento de conta');
pagamento.pagar();
pagamentoCartao.pagar();
