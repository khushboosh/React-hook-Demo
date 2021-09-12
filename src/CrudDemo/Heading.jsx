import React from "react";
import { Link } from "react-router-dom";
import { NavbarBrand, Nav, Navbar, NavItem, Container } from "reactstrap";
const Heading = () => {
  return (
    <>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="./">Studio</NavbarBrand>
          <Nav>
            <NavItem>
              <Link className="btn btn-primary" to="./add">
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Heading;
