import { isBefore } from 'date-fns';
import Conta from "./Conta";
import IPrestacao from "./IPrestacao";
import Pagamentos from "./Pagamentos";

export default class PagamentoBoleto extends Pagamentos {
  private _vencimento: Date;
  private _multa: number;
  private _prestacoes: Array<IPrestacao> = [];

  constructor(vencimento: Date, conta: Conta, valor: number, decricao?: string) {
    super(conta, valor, decricao);
    this._vencimento = vencimento;
    this._multa = 0.2;
    this._prestacoes = [];

  }

  set vencimento(vencimento: Date) {
    this._vencimento = vencimento;
  }
  get vencimento(): Date {
    return this._vencimento;
  }

  set multa(multa: number) {
    this._multa = multa;
  }

  get multa(): number {
    return this._multa;
  }

  private estaVencido(): boolean {
    return isBefore(this._vencimento, new Date());
  }


  public pagar(): void {

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
      
      
      this.valor =  this.valor + (this.valor * this.multa);
  
    }

    
    this.conta.debito(this.valor);
    console.log(`Saldo: ${this.conta.saldo}`);




  }