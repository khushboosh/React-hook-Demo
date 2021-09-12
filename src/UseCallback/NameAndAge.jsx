import React from "react";

const NameAndAge = ({ text, count }) => {
  console.log(`name and age render ${text}`);
  return (
    <div>
      <h1>
        {text} : {count}
      </h1>
    </div>
  );
};

export default React.memo(NameAndAge);
