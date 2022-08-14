import MessageStandard from "./MessageStandard";

export default class PasswordMessage extends MessageStandard {
  static minCharacter: number = 6;

  static set setMinCharacter(min: number) {
    this.minCharacter = min;
  }
  static setMessage(): void {
    this.errNumber = '400';
    this.msgName = '"password"';
  }
  static createMessage(): {} {
    return {
      ...super.createMessage(),
      'string.min': `${this.errNumber}|${this.msgName} ${this
        .characterLengthMessage(this.minCharacter)}`
    }
  }
  static characterLengthMessage(min: number): string {
    return `length must be at least ${min} characters long`;
  }
  static get getMessage(): {} {
    this.setMessage();
    return this.createMessage();
  }
}


console.clear();
console.log(PasswordMessage.getMessage);

