import React from "react";
import PassData from "./PassData";

//herr we are getting the data of PassData comp to child component ChildrenProp using {children} as an prop
const ChildrenProp = ({ children }) => {
  return (
    <div>
      <h1>
        This is the parent component data . We are getting this data from Parent
        component as an children prop child component
      </h1>
      <PassData>{children}</PassData>
    </div>
  );
};

export default ChildrenProp;
