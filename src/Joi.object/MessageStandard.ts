import JoiMessage from "./JoiMessage";


export default class MessageStandard extends JoiMessage {

  constructor() {
    super();
    this.errNumber = '400';
    this.name = '"Standard"';
    this.characterLength = 8;
  }
  createMessage(): {} {
    this.errMessage = {
      'any.required': `${this.errNumber}|${this.name} ${this.requiredMessage}`,
      'string.min': `${this.errNumber}|${this.name} ${this.characterLengthMessage()}`
    }
    return this.errMessage;
  }
  characterLengthMessage(): string {
    return `length must be at least ${this.characterLength} characters long`;
  }

  get getMessage(): {} {
    return this.createMessage();
  }
}


