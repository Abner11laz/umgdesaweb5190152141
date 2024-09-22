import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Gestión de Cursos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/crear-curso">
              <Nav.Link>Crear Curso</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/consulta-alumnos">
              <Nav.Link>Consulta de Alumnos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/creacion-cursos">
              <Nav.Link>Creación de Cursos</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;