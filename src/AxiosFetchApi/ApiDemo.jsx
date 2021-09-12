import React, { useState, useEffect } from "react";
import axios from "axios";
const ApiDemo = () => {
  const [post, setpost] = useState(null);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(true);

  //whene want api response at the time of page load
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setloading(false);
        setpost(response.data);
        console.log(response.data);
        seterror("");
      })
      .catch((error) => {
        setloading(false);
        setpost({});
        seterror(`Somethimg went wrong Error is: ${error}`);
      });
  }, []);
  return (
    <div>
      {loading === true
        ? "is loading"
        : post && (
            <>
              <h1>userID:{post.userId}</h1>
              <h1>ID:{post.id}</h1>
              <h1>Title:{post.title}</h1>
              <h1>{post.completed}</h1>
            </>
          )}
      {error ? error : null}
    </div>
  );
};

export default ApiDemo;
