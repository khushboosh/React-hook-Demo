import React, { useContext } from "react";
import { Context } from "./Provider";

const CompA = () => {
  const context = useContext(Context);
  return (
    <div>
      <h1>CompA</h1>
      <button onClick={context.inc}>INC</button>
      <button onClick={context.dec}>DEC</button>
      <button onClick={context.reset}>RESET</button>
    </div>
  );
};

export default CompA;
