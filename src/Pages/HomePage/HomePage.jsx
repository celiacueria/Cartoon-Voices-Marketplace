
import CardsGroup from "../../Components/CardsGroup/CardsGroup"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Reviews from "../../Components/Reviews/Reviews"
import Slogan from "../../Components/Slogan/Slogan"
import "./HomePage.css"


export default function HomePage() {
    return (
        <>
            <Header />
            <CardsGroup />
            <Slogan />
            <Reviews />
            <Footer />
        </>
    )
}