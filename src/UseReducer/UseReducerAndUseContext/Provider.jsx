import React, { createContext, useReducer } from "react";
import CompA from "../UseReducerAndUseContext/CompA";
import CompB from "../UseReducerAndUseContext/CompB";
import CompC from "../UseReducerAndUseContext/CompC";
const initialState = 0;

//we are re - using reducer function here
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + action.value;
    case "DEC":
      return state - action.value;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Context = createContext(initialState);

const Provider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inc = () => {
    dispatch({
      type: "INC",
      value: 10,
    });
  };
  const dec = () => {
    dispatch({
      type: "DEC",
      value: 10,
    });
  };
  const inc20 = () => {
    dispatch({
      type: "INC",
      value: 20,
    });
  };
  const dec20 = () => {
    dispatch({
      type: "DEC",
      value: 20,
    });
  };
  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Context.Provider value={{ state, inc, dec, inc20, dec20, reset }}>
        <h1>Count State is: {state}</h1>
        <CompA />
        <CompB />
        <CompC />
      </Context.Provider>
    </div>
  );
};

export default Provider;
export { Context };
