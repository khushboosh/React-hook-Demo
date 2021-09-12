import React, { useContext } from "react";

import { StateContext } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const EmpList = () => {
  const { employees, removeEmployee } = useContext(StateContext);

  return (
    <div>
      <ListGroup>
        {employees.length > 0 ? (
          employees.map((employee) => {
            return (
              <ListGroupItem className="d-flex" key={employee.id}>
                <strong>
                  {employee.fname}
                  {employee.lname}
                </strong>
                <div className="ml-auto">
                  <Link
                    className=" btn btn-warning mr-1"
                    to={`./edit/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <Button
                    className="btn-danger"
                    onClick={() => {
                      removeEmployee(employee.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroupItem>
            );
          })
        ) : (
          <h1>No user</h1>
        )}
      </ListGroup>
    </div>
  );
};

export default EmpList;
