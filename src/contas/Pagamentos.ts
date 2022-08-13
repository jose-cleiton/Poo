import Conta from "./Conta";


export default class Pagamentos {
  private _conta: Conta;
  private _valor: number;
  private _decricao: string;

  constructor(
    
     conta: Conta,
     valor: number,
     decricao?: string,     
     
     ) {
    console.clear()
    this._conta = conta;
    this._valor = valor
    this._decricao = decricao || 'Pagamento';
    

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
  set valor (valor: number) {
    this._valor = valor;
  }




  get decricao () : string {
    return this._decricao;
  }

  set decricao (decricao: string) {
    this._decricao = decricao;
  }

}
