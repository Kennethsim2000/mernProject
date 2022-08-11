import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Navbar,
  // NavDropdown,
  Offcanvas,
  Container,
  Form,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";

const NavigationBar = React.memo (() => {
  return (
    <div className="App">
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
        >
          <Container fluid>
            <Navbar.Brand href="/">
              {" "}
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Travellia
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" to="/">Home</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <Nav.Link href="/Contact" >Contact</Nav.Link>
                  <Nav.Link href="/Settings" >Settings</Nav.Link>
                  <Nav.Link href="/Login" >Login</Nav.Link>
                  <Nav.Link href="/Signup" >Signup</Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  <InputGroup>
                  {/* <InputGroup.Text >@</InputGroup.Text> */}
                  {/* <InputGroup.Append> */}
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faSearch} />
                      </InputGroup.Text>
                      {/* </InputGroup.Append> */}
                    <FormControl
                      type="search"
                      placeholder="Search..."
                      className="me-2"
                      aria-label="Search"
                    />
                    
                  </InputGroup>
                 
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
})

export default NavigationBar;
