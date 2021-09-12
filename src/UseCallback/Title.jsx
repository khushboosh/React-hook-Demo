import React from "react";

const Title = () => {
  console.log("Titile rendering.......");
  return (
    <div>
      <h1>UseCallback hook demo</h1>
    </div>
  );
};

export default React.memo(Title);
