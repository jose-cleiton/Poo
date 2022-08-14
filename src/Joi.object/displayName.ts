
import MessageStandard from './MessageStandard';

class JoiMessageDisplay extends MessageStandard{
  name:string;
  characterLength:number;

  constructor(setCharacterLength:number){
    super();
    this.name = '"displayName"';
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
const a = console.log(new JoiMessageDisplay(8).getMessage);

