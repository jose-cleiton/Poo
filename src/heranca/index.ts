import Animal from "./Animal";
import Mammal from "./Mammal";
import Bird from  './Bird '



const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('May 03, 2020')),
)

console.log(parrot.age);
parrot.fly();

/*
Saída (código rodado em Mar/2022):
1
Tigre está andando!
*/