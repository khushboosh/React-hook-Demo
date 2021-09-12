import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import { v4 as uuid } from "uuid";
import { StateContext } from "../context/StateProvider";

const Add = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const { addEmployee } = useContext(StateContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: uuid(),
      fname: fname,
      lname: lname,
    };
    addEmployee(newUser);
    history.push("/");
  };
  return (
    <>
      <Form action="" o n     nSubmit={submitHandler}>
        <FormGroup>
          <Label>Enter First Name: </Label>
          <Input
            type="text"
            value={fname}
            name="fname"
            onChange={(event) => setFname(event.target.value)}
            placeholder="Enter your first name..."
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Enter last Name: </Label>
          <Input
            type="text"
            value={lname}
            name="lname"
            onChange={(event) => setLname(event.target.value)}
            placeholder="Enter your last name..."
            required
          />
        </FormGroup>
        <Button type="submit" className="m-4 btn btn-primary">
          Submit
        </Button>
        <Link className=" m-4 m-2 btn btn-danger" to="/">
          CANCEL
        </Link>
      </Form>
    </>
  );
};

export default Add;
