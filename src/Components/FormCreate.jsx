
import CallAxios from "../Services/CallAxios";
import { useState } from "react";


export default function FormCreate() {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [email, setEmail] = useState('');
    const [precio, setPrecio] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            nombre: nombre,
            categoria: categoria,
            email: email,
            precio: precio
        };

        CallAxios.createVoice(data)
            .then(response => {
                
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);

            });
    }
    return (
        
            
            <div style={{ background: "rgba(219, 171, 236, 1)", padding: "5%", borderRadius: "10px" }} class="container d-flex justify-content-center mt-5">
                <div>
                    <form onSubmit={handleSubmit} class="form-container">
                        <h1 class="d-flex justify-content-center">Publica tu anuncio</h1>
                        <div class="mb-3">
                            <input required type="text" class="form-control" id="name"
                                placeholder="Nombre y Apellidos" onChange={(e) => setNombre(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <select required class="form-control" id="category" onChange={(e) => setCategoria(e.target.value)}>
                                <option value="" selected>Categoría</option>
                                <option value="Animación">Animación</option>
                                <option value="Cine">Cine</option>
                                <option value="Famosos">Famosos</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <input required type="text" class="form-control"
                                placeholder="Escribe aquí tu mail"
                                id="email" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <input required class="form-control" placeholder="Introduce un importe en euros"
                                id="price" onChange={(e) => setPrecio(e.target.value)}></input>
                        </div>
                        <button onclick={handleSubmit} type="submit" class="btn btn-dark">Enviar</button>
                        <button type="button" class="btn btn-dark ms-2">Borrar</button>
                    </form>
                    
                </div>
            </div>
);
}