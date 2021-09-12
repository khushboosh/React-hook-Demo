//demo for Multiple useReducers is to be used when dealing with multiple variables
//which have the same state transition,
// the reducer function is share among the multiple useReducers.
//This will reducing code and complexity.
import React, { useReducer } from "react";

//state as an oject
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

//action as an object having two parameters(type and value/payload)
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { firstCounter: state.firstCounter + action.value };
    case "DEC":
      return { firstCounter: state.firstCounter - action.value };
    case "INC 10":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "DEC 10":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const StateActionObj = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h1>{state.firstCounter}</h1>
        <button onClick={() => dispatch({ type: "INC", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DEC", value: 1 })}>
          Decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>reset </button>
      </div>
      <div>
        <h1>{state2.secondCounter}</h1>
        <button onClick={() => dispatch2({ type: "INC 10", value: 10 })}>
          Increment 10
        </button>
        <button onClick={() => dispatch2({ type: "DEC 10", value: 10 })}>
          Decrement 10
        </button>
      </div>

      <div>
        <button onClick={() => dispatch2({ type: "reset" })}>reset </button>
      </div>
    </div>
  );
};

export default StateActionObj;
export { reducer };
