export default abstract class JoiMessage{
  errNumber: string;
  name: string;
  requiredMessage: string;
  characterLength: number;
  errMessage: {}; 


  constructor(){
    this.errNumber = '';
    this.name = '';
    this.requiredMessage = 'is required';
    this.characterLength = 8;
    this.errMessage = {}; 

  }

  abstract characterLengthMessage(): string;
  abstract createMessage(): {};
  abstract get getMessage(): {} 

}