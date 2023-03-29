import CallAxios from "../../Services/CallAxios";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function FormCreate() {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [email, setEmail] = useState('');
    const [precio, setPrecio] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: nombre,
            category: categoria,
            email: email,
            price: precio
        };

        CallAxios().createVoice(data)
            .then(response => {
                
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);

            });
            
    }
    return (
        
            <div style={{ background: "rgba(219, 171, 236, 1)", padding: "5%", borderRadius: "10px" }} className="container d-flex justify-content-center mt-5">
                <div>
                    <form className="form-container">
                        <h1 className="d-flex justify-content-center">Publica tu anuncio</h1>
                        <div className="mb-3">
                            <input required type="text" className="form-control" id="name"
                                placeholder="Nombre y Apellidos" onChange={(e) => setNombre(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <select required className="form-control" id="category" onChange={(e) => setCategoria(e.target.value)}>
                                <option value="selected">Categoría</option>
                                <option value="Animación">Animación</option>
                                <option value="Cine">Cine</option>
                                <option value="Famosos">Famosos</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <input required type="text" className="form-control"
                                placeholder="Escribe aquí tu mail"
                                id="email" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <input required className="form-control" placeholder="Introduce un importe en euros"
                                id="price" onChange={(e) => setPrecio(e.target.value)}></input>
                        </div>
                        <button onClick={handleSubmit} type="submit" href="/" className="btn btn-dark">Enviar</button>
                        <button type="button" className="btn btn-dark ms-2">Borrar</button>
                    </form>
                    
                </div>
            </div>
);
}
