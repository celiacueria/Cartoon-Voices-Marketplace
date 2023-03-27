import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import "./Create.css"
import InputPhoto from "../../Components/InputPhoto/InputPhoto";


export default function Create() {

     
    return (
        <div>
            <Header />
            <div style={{ background: "rgba(219, 171, 236, 1)", padding: "5%", borderRadius: "10px" }} class="container d-flex justify-content-center mt-5">
                <div>
                    <form  class="form-container">
                        <h1 class="d-flex justify-content-center">Publica tu anuncio</h1>
                        <div class="mb-3">
                            <input required type="text" class="form-control" id="name"
                                placeholder="Nombre y Apellidos"></input>
                        </div>
                        <div class="mb-3">
                            <select required class="form-control" id="category">
                                <option value="" selected>Categoría</option>
                                <option value="Animación">Animación</option>
                                <option value="Cine">Cine</option>
                                <option value="Famosos">Famosos</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <input required type="text" class="form-control"
                                placeholder="Escribe aquí tu mail"
                                id="email"></input>
                        </div>
                        <div class="mb-3">
                            <input required class="form-control" placeholder="Introduce un importe en euros"
                                id="price"></input>
                        </div>
                        <button type="submit" class="btn btn-dark">Enviar</button>
                        <button type="button" class="btn btn-dark ms-2">Borrar</button>
                        <InputPhoto/>
      
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    );
}