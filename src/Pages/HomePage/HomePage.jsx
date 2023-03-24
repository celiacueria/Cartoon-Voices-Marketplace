
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Card from "../../Components/Card/Card"
import "./HomePage.css"

export default function HomePage() {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            <div>
                <Card />
            </div>
            <div style={{ display: "flex", background: "rgba(219, 171, 236, 1)", height: "30vh", marginTop: "5vh", justifyContent:"center", alignItems: "center" }}>
                <h1 style={{ color: "black", textAlign: "center", fontSize: "5vh" }}>Encuentra la voz de tu <span style={{ color: "red" }}>personaje </span> favorito</h1>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}