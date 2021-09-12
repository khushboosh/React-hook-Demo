import React, { useRef, useState } from "react";

//this hook came into picture when you will work with uncontrolled component

const UseRef = () => {
  const fname = useRef(null);
  const [show, setshow] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    const name = fname.current.value;
    name === "" ? alert("Please enter some value") : setshow(true);
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="fname">Enter your Name:</label>
          <input type="text" id="fname" ref={fname} />
        </div>
        <div>
          <button>Submit</button>
        </div>
        <div>
          <p>{show ? `Show my Entered Data: ${fname.current.value}` : ""}</p>
        </div>
      </form>
    </div>
  );
};

export default UseRef;
