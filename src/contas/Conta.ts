export default class Conta{
  private _saldo: number;

  constructor(saldo: number) {
    this._saldo = saldo;
  }

  public debito(valor: number) {
    if(this._saldo < valor) {
      throw new Error('Saldo insuficiente');
    } 
    this._saldo = this._saldo - valor;
  }

  set saldo(saldo: number) {
    this._saldo = saldo;
  }

  get saldo(): number {
    return this._saldo;
  }

}

