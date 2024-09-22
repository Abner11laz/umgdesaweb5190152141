import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

interface Curso {
  nombre: string;
  creditos: number;
  descripcion: string;
}

const CursoForm: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [creditos, setCreditos] = useState<number | string>('');
  const [descripcion, setDescripcion] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cursoData: Curso = {
      nombre,
      creditos: Number(creditos),
      descripcion
    };

    try {
      const response = await fetch('https://test-deploy-12.onrender.com/cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cursoData),
      });

      const result = await response.json();
      console.log('Curso creado:', result);
      alert('Curso creado con éxito');
    } catch (error) {
      console.error('Error al crear el curso:', error);
      alert('Hubo un error al crear el curso');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Crear un nuevo curso</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombreCurso">
          <Form.Label>Nombre del curso</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa el nombre del curso"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCreditosCurso">
          <Form.Label>Créditos</Form.Label>
          <Form.Control
            type="number"
            value={creditos}
            onChange={(e) => setCreditos(e.target.value)}
            placeholder="Número de créditos"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcionCurso">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Describe el curso"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear Curso
        </Button>
      </Form>
    </Container>
  );
};

export default CursoForm;