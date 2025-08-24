import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
} from "react-bootstrap";

function BootstrapNavBar(){
  return (
    <div className="Main">
      <Navbar
        className="Navy"
        collapseOnSelect
        expand="full"
      >
        <Navbar.Brand href="/">Calc</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav data-testid="navbar" className="mr-auto">
            <Nav.Link href="/history">Log</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default BootstrapNavBar;