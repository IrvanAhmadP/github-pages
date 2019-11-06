import React from 'react';
import { Container, Navbar, Nav, Jumbotron } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" inverse fluid>
        <Container>
          <Navbar.Brand href='#'>Irvan Ahmad Prasetya</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav'/>
          <Navbar.Collapse id='navbar-nav'>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron className="content-full-1">

      </Jumbotron>
    </div>
  );
}

export default App;
