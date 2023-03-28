import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import "./CardsGroup.css"




function CardsGroup() {
    
    let [cards, setCards] = useState([])

    const api = async()=>{
        await axios.get("http://localhost:8080/voices")
        .then(response=>{            
            setCards(response.data)
        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        api();   
    },[])



    return (
        <div class='cardsGroup'>
            {cards.map((actor,) =>
                <Card
                    actor={actor}
                    id={actor.id}
                    img={actor.urlImg}
                    video={actor.urlVideo}
                    name={actor.name}
                    category={actor.category}
                    price={actor.price}
                    email={actor.email}
                />
            )}
        </div>
    )
}

export default CardsGroup
