import React, { useContext } from "react";
import { Context } from "./Provider";
const CompE = () => {
  const { inc20, dec20, reset } = useContext(Context);
  return (
    <div>
      <h1>CompE</h1>
      <button onClick={inc20}>INC 20</button>

      <button onClick={dec20}>DEC 20</button>

      <button onClick={reset}>RESET</button>
    </div>
  );
};
export default CompE;
