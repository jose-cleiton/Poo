import Conta from "./Conta";
import PagamentoBoleto from "./PagamentoBoleto";

const keu = new Conta(150);

const pagamento = new PagamentoBoleto(new Date(), keu, 100, 'Pagamento de conta');



console.log(`Valor do pagamento: ${pagamento.valor}`);
console.log(`Valor da multa: ${pagamento.multa}`);

pagamento.pagar();

