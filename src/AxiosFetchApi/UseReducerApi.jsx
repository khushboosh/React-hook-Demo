import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, post: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, post: {}, error: `Something went wrong ` };

    default:
      return state;
  }
};

const UseReducerApi = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, []);
  return (
    <div>
      {state.loading === true
        ? "is loading"
        : state.post && (
            <>
              <h1>userID:{state.post.userId}</h1>
              <h1>ID:{state.post.id}</h1>
              <h1>Title:{state.post.title}</h1>
              <h1>{state.post.completed}</h1>
            </>
          )}
      {state.error ? state.error : null}
    </div>
  );
};

export default UseReducerApi;
