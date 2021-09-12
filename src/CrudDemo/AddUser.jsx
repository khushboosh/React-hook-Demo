import React, { useContext, useState } from "react";
import { GlobalContext } from "./Context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddUser = () => {
  const { addUser } = useContext(GlobalContext);

  const [name, setName] = useState("");

  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };
  const addName = (event) => {
    console.log(setName(event.target.value));
  };
  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={addName}
            placeholder="Enter Name"
            required
          ></Input>
        </FormGroup>
        <br />
        <Button type="submit">Submit</Button>
        <Link to="./" className="btn btn-danger ml-4">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddUser;
