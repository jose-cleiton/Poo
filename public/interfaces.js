"use strict";
const tlou = {
    _title: 'The Last of Us',
    _description: 'A survival horror game',
    _genre: 'Survival Horror',
    _plataform: ['PS4', 'XBOX', 'PC'],
    getSimilars: (title) => {
        console.clear();
        console.log(`Similar games to ${title}`);
    }
};
const outro = {
    _title: 'The Last of Us: Part 2',
    _description: 'A survival horror game',
    _genre: 'Survival Horror',
    _plataform: ['PS4', 'XBOX', 'PC'],
    getSimilars: (title) => {
        console.clear();
        console.log(`Similar games to ${title}`);
    },
    originalGame: tlou,
    newContent: ['New content', 'New content 2'],
};
console.clear();
class CreatGame {
    constructor(title, description, genre, plataform) {
        this._title = title;
        this._description = description;
        this._genre = genre;
        this._plataform = plataform;
    }
}
