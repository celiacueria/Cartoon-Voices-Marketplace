import React from 'react';
//import { useState } from 'react';
import '../Pages/Create/Create.css'

export default function FormCreate() {

    // const [name, setName] = useState('');
    // const [category, setCategory] = useState('');
    // const [email, setEmail] = useState('');
    // const [price, setPrice] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log(name, category, description, price);
    // };
    return (
        <div class="container">
        <div class="form-body">
            <div class="row">
                <div class="form-holder">
                    <div class="form-content">
                        <div class="form-items">
                            <h3>Publica tu anuncio</h3>
                            <p>Rellena todos los campos</p>

                            <form>
                                <div class="col-md-12 form-group mb-3">
                                <label class="form-label" for="name">Nombre y Apellidos</label>
                                    <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre" required></input>
                                </div>

                                <div class="col-md-12 form-group mb-3">
                                    <label class="form-label" for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Ingresa tu email"></input>
                                </div>
                                <div class="col-md-12 form-group mb-3">
                                    <label class="form-label" for="category">Categoría</label>
                                    <select class="form-select mt-3" required id="category">
                                        <option>Selecciona una categoría</option>
                                        <option>Personaje Disney</option>
                                        <option>Cine</option>
                                        <option>Famosos</option>
                                    </select>
                                </div>
                                <div class="col-md-12 form-group mb-3">
                                <label class="form-label" for="price">Precio</label>
                                    <input type="number" class="form-control" id="price" placeholder="Ingresa un valor en euros" required></input>
                                </div>
                                <div class="col-md-12 form-group mb-3">
                                <label class="form-label" for="image">Añade una imagen para tu anuncio</label>
                                    <input type="text" class="form-control" id="image" placeholder="Ingresa la URL de la imagen" required></input>
                                </div>
                                <div class="form-button mt-3">
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}