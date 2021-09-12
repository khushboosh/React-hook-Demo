import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../CrudDemo/Context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditUser = (props) => {
  const { users, editUser } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  const history = useHistory();

  const currentUserId = props.match.params.id;

  //when  we want the selected user for whoch we want to edit the values;
  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };
  const editName = (event) => {
    setSelectedUser({
      ...selectedUser,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <Form action="" onSubmit={onSubmitHandler}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            value={selectedUser.name}
            name="name"
            onChange={editName}
            placeholder="Enter Name"
            required
          ></Input>
        </FormGroup>
        <br />
        <Button type="submit">Edit</Button>
        <Link to="/" className="btn btn-danger ml-10">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
