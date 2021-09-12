import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <>
      <ListGroup className="mt-4">
        {users.length > 0 ? (
          <>
            {users.map((user) => {
              return (
                <ListGroupItem className="d-flex" key={user.id}>
                  <strong>{user.name}</strong>
                  <div className="ml-auto">
                    <Link
                      className=" btn btn-warning mr-1"
                      to={`./edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Button
                      className="btn-danger"
                      onClick={() => removeUser(user.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroupItem>
              );
            })}
          </>
        ) : (
          <h1 className="text-center ">No users</h1>
        )}
      </ListGroup>
    </>
  );
};

export default UserList;
