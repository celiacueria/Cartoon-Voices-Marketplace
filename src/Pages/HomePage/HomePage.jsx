
import CardsGroup from "../../Components/CardsGroup/CardsGroup"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Seeker from "../../Components/Seeker/Seeker"

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
            <Seeker/>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}