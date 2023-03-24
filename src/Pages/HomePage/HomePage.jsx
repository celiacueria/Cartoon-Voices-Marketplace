
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

import Seeker from "../../Components/Seeker/Seeker"
import Card from "../../Components/Card/Card"
import "./HomePage.css"

export default function HomePage() {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            <div>
            </div>
            <footer>
                <Footer />
            </footer>
            <Seeker />
            <Card />
        </div>
    )
}