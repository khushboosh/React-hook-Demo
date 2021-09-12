import React, { useReducer } from "react";
import { createContext } from "react/cjs/react.development";
import Reducer from "./Reducer";
import StateConsumer from "./StateConsumer";

const initialState = 0;

const StateContext = createContext(initialState);

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementCounter = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <StateContext.Provider
        value={{ state, incrementCounter, decrementCounter }}
      >
        <StateConsumer />

        {props.children}
      </StateContext.Provider>
    </div>
  );
};

export default StateProvider;
export { StateContext };
