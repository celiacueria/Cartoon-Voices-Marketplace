import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./Contact.css"

export default function Contact() {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            <form class="mi-formGen" id="mi-form" action="https://formspree.io/f/mrgvlkdq" method="POST" style={{ marginTop: "8vh", marginLeft: "6vw", marginRight: "6vw" }}>
                <div class="container-fluid text-white py-5" style={{ borderRadius: "50px", background: "rgba(219, 171, 236, 1)" }}>
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6">
                            <h4 class="text-center text-warning mb-5 text-black" style={{ fontSize: "3rem" }}>Contacto</h4>
                            <div class="mb-4">
                                <label for="email" class="form-label fs-5 mx-1 text-black">Email:</label>
                                <input type="email" name="email" class="form-control form-control-lg" placeholder="Escribe tu email aquí" />
                            </div>
                            <div class="mb-4">
                                <label for="message" class="form-label fs-5 mx-1 text-black">Mensaje:</label>
                                <textarea class="form-control" id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí" style={{ borderRadius: "10px" }}></textarea>
                            </div>
                            <button class="btn btn-dark btn-mg rounded-pill text-white">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}