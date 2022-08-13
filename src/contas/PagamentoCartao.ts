import Pagamentos from "./Pagamentos";

export default class PagamentoCartao extends Pagamentos {
  public pagar(): void {

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