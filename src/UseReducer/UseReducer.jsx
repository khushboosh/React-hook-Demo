import React, { useReducer } from "react";
import { Button } from "reactstrap";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementCounter = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <h2>{state}</h2>
      <h1>...........Use Reducer Demo in one component..............</h1>

      <Button onClick={incrementCounter}>Increment</Button>
      <Button onClick={decrementCounter}>Decrement</Button>
    </>
  );
};

export default UseReducer;
