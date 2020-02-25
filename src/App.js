import React from 'react';
import {
  Container, Navbar, Nav, Jumbotron, Row, Col, Image, Card
} from 'react-bootstrap';
import { FaLinkedin, FaGithub } from "react-icons/fa";

/* data */
import portofolioData from './assets/data/portofolioData'

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
          <Navbar.Brand href='#'>Irvan Ahmad P.</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav'/>
          <Navbar.Collapse id='navbar-nav'>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#portofolio">Portofolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid style={{padding : '0px 0px' }}>
        <Jumbotron id="home" className="d-flex flex-column align-items-center justify-content-center content-full-cover">
          <h1>Irvan Ahmad P.</h1>
          <h4><p>Professional Bio</p></h4>
        </Jumbotron>
        <Jumbotron id="portofolio" className="d-flex flex-column align-items-center justify-content-center content-full bg-white">
          <Row>
            <h2>Portofolio</h2>
          </Row>
          <Container style={{marginTop : '25px'}}>
            <Row>
              {
                portofolioData.map((portofolioDataRow, i) =>
                  <Col className="col-portofolio-wrap">
                    <Card className="card-wrap">
                      <div className="image-protofolio-wrap">
                        <Image variant="top" rounded className="img-portofolio" src={ portofolioDataRow.imageUrl } />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <a href={portofolioDataRow.url} title={portofolioDataRow.title}>
                            { portofolioDataRow.title }
                          </a>
                        </Card.Title>
                        <Card.Text>
                          { portofolioDataRow.content }
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron id="about" className="d-flex flex-column align-items-center justify-content-center content-full bg-light">
          <Row>
            <h2>Irvan Ahmad P.</h2>
          </Row>
          <Row>
            <Image className="photo-profile" src={Avatar} roundedCircle/>
          </Row>
          <Row>
            <h4 className="text-secondary">
              Web Developer
            </h4>
          </Row>
          <Row>
            <a className="btn btn-light btn-lg" href="https://www.linkedin.com/in/irvan-ahmad-prasetya-6306a8115/" role="button">
              <FaLinkedin/>
            </a>
            <a className="btn btn-light btn-lg" href="https://github.com/IrvanAhmadPrasetya" role="button">
              <FaGithub/>
            </a>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
