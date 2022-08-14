export default class MessageStandard {
  static errNumber: string ='Numero não implementado';
  static msgName: string = 'Nome não implementado';
  static IS_REQUIRED: string = 'is required';
  static errMessage: {} = {};



  static createMessage(): {} {
    this.errMessage = {
      'any.required': `${this.errNumber}|${this.msgName} ${this.IS_REQUIRED}`,
      'string.min': `${this.errNumber}|${this.msgName} ${this.IS_REQUIRED}`
    }

    return this.errMessage;
  }
  static get getMessage(): {} {
    return this.errMessage
  }
  
}

console.log(MessageStandard.getMessage);