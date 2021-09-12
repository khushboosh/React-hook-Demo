const ReducerFun = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return { ...state, employees: [action.payload, ...state.employees] };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((emp) => {
          return emp.id !== action.payload;
        }),
      };
    case "UPDATE_EMPLOYEE":
      const updateEmployee = action.payload;

      const updatedEmployee = state.users.map((user) => {
        if (user.id === updateEmployee.id) {
          return updateEmployee;
        }
        return user;
      });
      return { ...state, employees: updatedEmployee };

    default:
      return state;
  }
};
export default ReducerFun;
