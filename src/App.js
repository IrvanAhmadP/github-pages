import React from 'react';
import { Container, Navbar, Nav, Jumbotron, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="custom-navbar" fixed="top">
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
              <Nav.Item>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid style={{padding : '0px 0px' }}>
        <Jumbotron id="home" className="d-flex flex-column align-items-center justify-content-center content-full content-home">
          <h1>Irvan Ahmad Prasetya</h1>
          <h4><p>professional bio</p></h4>
        </Jumbotron>       
        <Jumbotron id="about" className="content-full bg-white">

        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
