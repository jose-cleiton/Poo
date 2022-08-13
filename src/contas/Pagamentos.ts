import Conta from "./Conta";
import IPrestacao from "./IPrestacao";

class Pagamentos {
  private _conta: Conta;
  private _valor: number;
  private _tipo: string;
  private _venciemnto: Date;
  private _decricao: string;
  private _multa: number;
  private _prestacao:  Array<IPrestacao>;

  constructor(
     conta: Conta,
     valor: number,
     tipo: string, 
     vencimento: Date, 
     decricao?: string, 
     multa = 0.2,
     
     ) {
    this._conta = conta;
    this._valor = valor;
    this._tipo = tipo;
    this._venciemnto = vencimento;
    this._decricao = decricao || 'Pagamento';
    this._multa = multa;
    this._prestacao = [];

  }

 get conta () : Conta {
   return this._conta;

 }

 set conta (conta: Conta) {
    this._conta = conta;
 }

  get valor () : number {
    return this._valor;
  }




  get tipo () : string {
    return this._tipo;
  }

  set tipo (tipo: string) {
    this._tipo = tipo;
  }

  get venciemnto () : Date {
    return this._venciemnto;
  }

  set venciemnto (venciemnto: Date) {
    this._venciemnto = venciemnto;
  }

  get decricao () : string {
    return this._decricao;
  }

  set decricao (decricao: string) {
    this._decricao = decricao;
  }

  get multa () : number {

    return this._multa;
  }


  
  set prestacao (prestacao: Array<IPrestacao>) {
    if(prestacao.length>10) {
      throw new Error('Maximo de prestacoes permitidas é de 10x');
    }
    this._prestacao = prestacao;
  }
  get prestacao () : Array<IPrestacao> {
    return this._prestacao;
  }

  calcularPrestacao(prestacao: IPrestacao) {
    this._prestacao.push(prestacao);
  }


}




export default Pagamentos;