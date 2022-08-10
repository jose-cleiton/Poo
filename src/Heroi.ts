class Heroi {
  private _name  : string;
  private _power : Array<string>;
  private _age   : number;

  constructor(name: string, power: Array<string>, age: number) {
    this._name  = name;
    this._power = power;
    this._age   = age;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
      if(!name) throw new Error('Name is required');
      this._name = name;
  }

  set power(power: Array<string>) {
    this._power = power;
  }

}
type IId = number | string;

type CharInfo = {
  name: string,
  level: number
}

type AccontIinfo = {
  id: IId,
  nickName: string,
  email?: string,
}

type PlayerInfo =  CharInfo & AccontIinfo;
const id = '123';
const player: PlayerInfo = {
  name: 'Thiago',
  level: 1,
  id: id,
  nickName: 'Thiago'
  

}



