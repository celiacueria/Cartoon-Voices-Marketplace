
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
        <div class="form-body">
            <div class="row">
                <div class="form-holder">
                    <div class="form-content">
                        <div class="form-items">
                            <h3>Publica tu anuncio</h3>
                            <p>Rellena todos los campos</p>

                            <form>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre" required></input>
                                </div>

                                <div class="col-md-12">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Ingresa tu email"></input>
                                </div>
                                <div class="col-md-12">
                                    <label for="category">Categoría</label>
                                    <select class="form-select mt-3" required id="category">
                                        <option>Selecciona una categoría</option>
                                        <option>Personaje Disney</option>
                                        <option>Cine</option>
                                        <option>Famosos</option>
                                    </select>
                                </div>
                                <div class="col-md-12">

                                    <input type="number" class="form-control" id="precio" placeholder="Ingresa el precio" required></input>
                                </div>
                                <div class="col-md-12">

                                    <input type="text" class="form-control" id="imagen" placeholder="Ingresa la URL de la imagen" required></input>
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
    );
}