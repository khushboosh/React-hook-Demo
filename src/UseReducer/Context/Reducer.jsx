const Reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};
export default Reducer;
