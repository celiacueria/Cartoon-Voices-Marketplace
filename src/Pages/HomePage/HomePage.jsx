
import CardsGroup from "../../Components/CardsGroup/CardsGroup"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

import "./HomePage.css"

export default function HomePage() {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            <div>
            <CardsGroup/>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}