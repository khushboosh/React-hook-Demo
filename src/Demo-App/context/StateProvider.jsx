import React, { useReducer } from "react";
import { createContext } from "react/cjs/react.development";
import ReducerFun from "./ReducerFun";

const initialState = { employees: [] };
const StateContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFun, initialState);

  const addEmployee = (employee) => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee,
    });
  };
  const removeEmployee = (id) => {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  };

  const updateEmployee = (employee) => {
    dispatch({
      type: "UPDATE_EMPLOYEE",
      payload: employee,
    });
  };

  return (
    <div>
      <StateContext.Provider
        value={{
          employees: state.employees,
          addEmployee,
          removeEmployee,
          updateEmployee,
        }}
      >
        {children}
      </StateContext.Provider>
    </div>
  );
};

export default StateProvider;
export { StateContext };
