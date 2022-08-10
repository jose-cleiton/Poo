
const useState = () => {
  let state : number | string;

  const getSatate = () => {
    return state;
  }

  const setState = (newState: number | string) => {
    state = newState;
  }

  return {
    getSatate,
    setState
  }


}

console.clear()

const newState = useState();

newState.setState(123);

console.log(newState.getSatate());

newState.setState('Hello');
console.log(newState.getSatate());

