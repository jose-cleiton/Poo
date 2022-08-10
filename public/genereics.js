"use strict";
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
function useState() {
    let state;
    function getSatate() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return {
        getSatate,
        setState
    };
}
console.clear();
const newState = useState();
newState.setState(123);
console.log(newState.getSatate());
newState.setState('Hello');
console.log(newState.getSatate());
