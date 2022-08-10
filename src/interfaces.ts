interface Game {
  _title: string;
  _description: string;
  _genre: string;
  _plataform:  Array<string>;
  getSimilars?: (title: string) => void;
}

const tlou: Game = {  
  _title: 'The Last of Us',
  _description: 'A survival horror game',
  _genre: 'Survival Horror',
  _plataform: ['PS4', 'XBOX', 'PC'],
  getSimilars: (title: string) => {
    console.clear()
    console.log(`Similar games to ${title}`);
  } 

}

interface DLC extends Game {
  originalGame: Game;
  newContent: Array<string>;
}

const outro: DLC = {
  _title: 'The Last of Us: Part 2',
  _description: 'A survival horror game',
  _genre: 'Survival Horror',
  _plataform: ['PS4', 'XBOX', 'PC'],
  getSimilars: (title: string) => {
    console.clear()
    console.log(`Similar games to ${title}`);
  },
  originalGame: tlou,
  newContent: ['New content', 'New content 2'],  

}
console.clear()

class CreatGame implements Game {
  _title: string;
  _description: string;
  _genre: string;
  _plataform: Array<string>;


  constructor(title: string, description: string, genre: string, plataform: Array<string>) {
    this._title = title;
    this._description = description;
    this._genre = genre;
    this._plataform = plataform;

    
  }
 
}



