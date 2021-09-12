import React, { useState, useMemo } from "react";

//to improve the performance and also to avoid the
//unwanted unnecessary calling of this extraFun function we use useMemo() hook
const UseMemoComp = () => {
  const [counterOne, setcounterOne] = useState(10);
  const [counterTwo, setcounterTwo] = useState(20);
  const incCounter10 = () => {
    console.log("incCounter10");
    setcounterOne(counterOne + 10);
  };
  const incCounter20 = () => {
    console.log("incCounter20");
    setcounterTwo(counterTwo + 20);
  };

  const extraFun = useMemo(() => {
    console.log("extrafun");
    return counterOne + 100;
  }, [counterOne]);
  return (
    <div>
      <span>ExtraFun function : {extraFun}</span>
      <button onClick={incCounter10}>Counter 10:{counterOne} </button>
      <button onClick={incCounter20}>Counter20: {counterTwo}</button>
    </div>
  );
};

export default UseMemoComp;
