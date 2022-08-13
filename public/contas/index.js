"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
const Pagamentos_1 = __importDefault(require("./Pagamentos"));
const keu = new Conta_1.default(1000);
const pagamento = new Pagamentos_1.default(keu, 100, 'credito', new Date());
console.log(pagamento.conta.saldo);
console.log(pagamento.valor);
console.log(keu);
