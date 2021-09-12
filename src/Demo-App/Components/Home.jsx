import React from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  Container /*  */,
} from "reactstrap";
import { Link } from "react-router-dom";
import EmpList from "./EmpList";
const Home = () => {
  return (
    <div>
      <Navbar className="d-flex">
        <Container className="dark border ">
          <NavbarBrand>React Studio</NavbarBrand>

          <Nav>
            <NavItem>
              <Link to="/add" className="btn btn-primary">
                Add Employee
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <EmpList />
    </div>
  );
};

export default Home;
