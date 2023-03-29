import React, { useEffect, useState } from 'react'

import axios from 'axios'
import "./CarouselCards.css"

function CarouselCards() {
    let [cards, setCards] = useState([])

    const api = async () => {
        await axios.get("http://localhost:8080/voices")
            .then(response => {
                setCards(response.data)
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        api();
    }, [])

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" >
                {cards.map((card, index) =>
                    <div 
                    className={index === 0 ? "carousel-item active" : "carousel-item"} 
                    key={card.id} 
                    >
                        <img class="d-block" src={card.urlImg} alt={card.name} style={{width:"30vw", margin:"auto"}} />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 style={{color:"black", fontWeight:"700"}}>{card.name}</h2>
                            <h4 style={{color:"black"}}>{card.email}</h4>
                        </div>
                    </div>
                )}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
                <span class="visually-hidden" >Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselCards