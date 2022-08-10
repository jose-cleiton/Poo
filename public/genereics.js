"use strict";
const useState = () => {
    let state;
    const getSatate = () => {
        return state;
    };
    const setState = (newState) => {
        state = newState;
    };
    return {
        getSatate,
        setState
    };
};
console.clear();
const newState = useState();
newState.setState(123);
console.log(newState.getSatate());
newState.setState('Hello');
console.log(newState.getSatate());
