import "./Create.css"
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Create() {
         
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
       
        console.log(name, category, description, price);
    };
    return (

        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre y Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre y apellidos" value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>
  
        <Form.Group controlId="category">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            <option value="category1">Personajes</option>
            <option value="category2">Actores</option>
            <option value="category3">Famosos</option>
          </Form.Control>
        </Form.Group>
  
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" placeholder="Ingresa una descripción" value={description} onChange={(event) => setDescription(event.target.value)} />
        </Form.Group>
  
        <Form.Group controlId="formPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Ingresa el precio" value={price} onChange={(event) => setPrice(event.target.value)} />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    );
  }
        
    
