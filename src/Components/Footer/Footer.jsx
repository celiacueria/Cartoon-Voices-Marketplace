import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./Footer.css"


export default function Footer() {
    return (
        <div>
            <div className="footer-line">
                <div className="footer">
                    <AiFillTwitterCircle className="icon" />
                    <AiFillInstagram className="icon" />
                    <AiFillFacebook className="icon" />
                </div>
            </div>
        </div>
    )
}