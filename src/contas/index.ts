import Conta from "./Conta";
import PagamentoBoleto from "./PagamentoBoleto";
import PagamentoCartao from "./PagamentoCartao";

const keu = new Conta(150);

const pagamento = new PagamentoBoleto(new Date(), keu, 20, 'Pagamento de conta');
const pagamentoCartao = new PagamentoCartao( keu, 100, 'Pagamento de conta');



pagamento.pagar();


//pagamentoCartao.pagar();

