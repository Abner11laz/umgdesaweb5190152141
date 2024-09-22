import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CursoForm from './Components/CursoForm';
import Menu from './Components/Menu';
import { Container } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Container className="mt-5">
        <Routes>
          <Route path="/crear-curso" element={<CursoForm />} />
          <Route path="/consulta-alumnos" element={<div>Consulta de Alumnos</div>} />
          <Route path="/creacion-cursos" element={<div>Creación de Cursos</div>} />
          <Route path="/" element={<div>Página de Inicio</div>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
