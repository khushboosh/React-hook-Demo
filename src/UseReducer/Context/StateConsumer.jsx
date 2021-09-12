import React, { useContext } from "react";
import { Button } from "reactstrap";
import { StateContext } from "./StateProvider";

const StateConsumer = () => {
  const { state, incrementCounter, decrementCounter } =
    useContext(StateContext);

  return (
    <div className="container">
      <h1>{state}</h1>
      <Button onClick={incrementCounter}>Increment</Button>
      <Button onClick={decrementCounter}>Decrement</Button>
    </div>
  );
};

export default StateConsumer;
