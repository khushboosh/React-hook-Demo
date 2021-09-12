import React, { useState, useCallback } from "react";
import ButtonClick from "./ButtonClick";
import NameAndAge from "./NameAndAge";
import Title from "./Title";

const ParentComp = () => {
  const [sal, setsal] = useState(100);
  const [age, setage] = useState(10);
  const IncrementSal = useCallback(() => {
    setsal(sal + 10);
  }, [sal]);
  const IncrementAge = useCallback(() => {
    setage(age + 10);
  }, [age]);
  return (
    <div>
      <Title />
      <NameAndAge text="sal" count={sal}>
        Salary
        {/* we are passing this value salry,age,IncSal,IncAge using{" "}
        {children} prop to child componennt */}
      </NameAndAge>
      <ButtonClick handleClick={IncrementSal}>IncSal</ButtonClick>
      <NameAndAge text="age" count={age}>
        Age
      </NameAndAge>
      <ButtonClick handleClick={IncrementAge}>IncAge</ButtonClick>
    </div>
  );
};

export default ParentComp;
