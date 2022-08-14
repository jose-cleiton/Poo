import MessageStandard from "./MessageStandard";

export default class EmailMessage extends MessageStandard {
  static MUST_BE_A_VALID_EMAIL: string ;
  
static setMessage(): void {
    this.errNumber='400';
    this.msgName = '"email"';
    this.MUST_BE_A_VALID_EMAIL = 'must be a valid email';
  }


static createMessage(): {} {
    return {
      'any.required': `${this.errNumber}|${this.msgName} ${this.IS_REQUIRED}`,
      'string.email': `${this.errNumber}|${this.msgName} ${this.MUST_BE_A_VALID_EMAIL}`
    }
  }



   
  static get getMessage(): {} {
    this.setMessage();
    return this.createMessage();
  }
  


}

console.clear();

console.log(EmailMessage.getMessage);