import React from "react";

const ButtonClick = ({ handleClick, children }) => {
  console.log(`rendering button ,`, children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default React.memo(ButtonClick);
