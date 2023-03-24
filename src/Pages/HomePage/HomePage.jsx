
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Card from "../../Components/Card/Card"
import "./HomePage.css"
import Reviews from "../../Components/Reviews/Reviews"
import Slogan from "../../Components/Slogan/Slogan"


export default function HomePage() {
    return (
        <>
            <Header />
            <Card />
            <Slogan />
            <Reviews />
            <Footer />
        </>
    )
}