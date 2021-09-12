import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import { v4 as uuid } from "uuid";
import { StateContext } from "../context/StateProvider";

const Edit = (props) => {
  const [selectedUser, setSelecteduser] = useState({
    id: "",
    fname: "",
    lname: "",
  });
  const { employees, updateEmployee } = useContext(StateContext);
  const history = useHistory();

  const currentEmpId = props.match.params.id;

  useEffect(() => {
    const empId = currentEmpId;
    const employee = employees.find((emp) => emp.id === empId);
    setSelecteduser(employee);
  }, [currentEmpId, employees]);

  const submitHandler = (event) => {
    event.preventDefault();
    updateEmployee(selectedUser);
    history.push("/");
  };
  const setName = (event) => {
    setSelecteduser({
      ...selectedUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Form action="" onSubmit={submitHandler}>
        <FormGroup>
          <Label>Enter First Name: </Label>
          <Input
            type="text"
            value={selectedUser.fname}
            name="fname"
            onChange={(event) => setName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Enter last Name: </Label>
          <Input
            type="text"
            value={selectedUser.lname}
            name="lname"
            onChange={(event) => setName(event.target.value)}
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

export default Edit;
