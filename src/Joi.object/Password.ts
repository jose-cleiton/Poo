import MessageStandard from './MessageStandard';

class Password extends MessageStandard{

  constructor(setCharacterLength:number){
    super();
    this.name = '"password"';
    this.characterLength = setCharacterLength;   

  }
  characterLengthMessage(): string {
    return super.characterLengthMessage();
  }
  createMessage(): {} {
    return super.createMessage();
  }
  get getMessage(): {} {
    return super.getMessage;
  }


}




console.clear();
const a = console.log(new Password(6).getMessage);
