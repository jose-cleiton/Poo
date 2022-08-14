import MessageStandard from './MessageStandard';


class Email extends MessageStandard{
  MUST_BE_A_VALID_EMAIL : string;
  
    constructor(){
      super();
      this.name = '"email"';
      this.characterLength = 8;
      this.MUST_BE_A_VALID_EMAIL = 'must be a valid email';

    }
    createMessage(): {} {
      this.errMessage = {
        'any.required': `${this.errNumber}|${this.name} ${this.requiredMessage}`,
        'string.email': `${this.errNumber}|${this.name} ${this.MUST_BE_A_VALID_EMAIL}`
      }
      return this.errMessage;
    }

  
   
    get getMessage(): {} {
      return super.getMessage;
    }
  
}

console.clear();
const a = console.log(new Email().getMessage);
