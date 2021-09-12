import React, { useState, useMemo } from "react";

//to improve the performance and also to avoid the
//unwanted unnecessary calling of this isEven function
//also to avoid unnecessry delays bwtween the output of the functions as here we can see
//the expensive computation for checking even and odd as the number is too large for the
//condition checking
// we use useMemo() hook
const Dem022 = () => {
  const [counterOne, setcounterOne] = useState(10);
  const [counterTwo, setcounterTwo] = useState(20);
  const incCounter10 = () => {
    console.log("incCounter10");
    setcounterOne(counterOne + 1);
  };
  const incCounter20 = () => {
    console.log("incCounter20");
    setcounterTwo(counterTwo + 20);
  };

  const isEven = useMemo(() => {
    console.log("extrafun");
    let i = 0;
    while (i < 20000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={incCounter10}>Counter 1:{counterOne} </button>
      <button onClick={incCounter20}>Counter20: {counterTwo}</button>
    </div>
  );
};

export default Dem022;
