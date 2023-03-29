import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import "./CardsGroup.css"

function CardsGroup() {

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

    function chunk(array, size) {
        const result = [];

        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    }

    return (
        <div class='container'>
            {chunk(cards, 4).map((cardGroup, index) =>
                <div class="row mb-3 " key={index}>
                    <div class="card-group w-100">
                        {cardGroup.map((actor) =>
                            <Card
                                actor={actor}
                                id={actor.id}
                                img={actor.urlImg}
                                video={actor.urlVideo}
                                name={actor.name}
                                category={actor.category}
                                price={actor.price}
                                email={actor.email}
                                key={actor.id}
                                className="mr-3 mb-3"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardsGroup
