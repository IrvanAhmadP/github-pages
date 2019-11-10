import React from 'react';
import { Container, Navbar, Nav, Jumbotron, Row, Col } from 'react-bootstrap';

/* style */
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

/* images */
import Avatar from './img/avatar.jpg';

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
        <Jumbotron id="home" className="d-flex flex-column align-items-center justify-content-center content-full content-home">
          <h1>IAP</h1>
          <h4><p>professional bio</p></h4>
        </Jumbotron>       
        <Jumbotron id="about" className="d-flex flex-column align-items-center justify-content-center content-full bg-white">
          <Row>
            <p className="display-4">IAP</p>
          </Row>
          <Row>
            <img src={Avatar}/>
          </Row>
          <Row>
            <p>Web Developer</p>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
