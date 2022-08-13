import Conta from "./Conta";
import Pagamentos from "./Pagamentos";

const keu = new Conta(1000);

const pagamento = new Pagamentos(keu, 100, 'credito', new Date());

console.log(pagamento.conta.saldo);
console.log(pagamento.valor);
console.log(keu);

