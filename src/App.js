import React from 'react';
import { Container, Navbar, Nav, Jumbotron, Row, Col, Image } from 'react-bootstrap';

/* style */
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

/* images */
let Avatar = './img/avatar.jpg';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container>
          <Navbar.Brand href='#'>IAP</Navbar.Brand>
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
        <Jumbotron id="home" className="d-flex flex-column align-items-center justify-content-center content-full-cover">
          <h1>IAP</h1>
          <h4><p>Professional Bio</p></h4>
        </Jumbotron>
        <Jumbotron id="about" className="d-flex flex-column align-items-center justify-content-center content-full bg-white">
          <Row>
            <h2>IAP</h2>
          </Row>
          <Row>
            <Image className="photo-profile" src={Avatar} roundedCircle/>
          </Row>
          <Row>
            <h4 className="text-secondary">
              Web Developer
            </h4>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
