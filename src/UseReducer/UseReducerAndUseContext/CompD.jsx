import React, { useContext } from "react";
import { Context } from "./Provider";
const CompD = () => {
  //here we are consuming propd from provideer through compB

  //object destructuring
  const { inc, dec, reset } = useContext(Context);

  return (
    <div>
      <h1>CompD</h1>
      <button onClick={inc}>INC 10</button>

      <button onClick={dec}>DEC 10</button>

      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default CompD;
