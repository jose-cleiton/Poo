// S => State
// T => Type
// k => Key
// v => Value
// E => Element
// R => Return
// A => Array
// O => Object
// F => Function
// M => Method
// C => Class
// I => Interface
// D => Data
// U => Union
// N => Null
// B => Boolean
// S => String
// N => Number

type numOrStr = number | string ;



function  useState<S extends numOrStr = string>()  {
  let state :S;

 function getSatate () {
    return state;
  }

  function setState (newState:S)  {
    state = newState;
  }

  return {
    getSatate,
    setState
  }


}

console.clear()

const newState = useState<number>();

newState.setState(123);

console.log(newState.getSatate());

