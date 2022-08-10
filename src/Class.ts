import { Console } from "console";

class UserAccont {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    console.clear()
    this._name = name;
    this._age = age;
  }
  logDetails(): void {
    console.log(`Name: ${this._name}, Age: ${this._age}`);
  }

  get getAge() {
    console.log('<----GET---->');    
    return this._age;
  }
  set setAge(age: number) {
    this._age = age;
  }

}

const jose = new UserAccont('Jose', 20);

console.log(jose.getAge);












