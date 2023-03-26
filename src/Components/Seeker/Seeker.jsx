import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"


function Seeker(hijoAPadre) {
    let [actors, setActors] = useState("");
    let [actorsTable, setActorsTable] = useState([]);
    let [search, setSearch] = useState("");

    //solo para prueba de funcion, se debe implementar luego nuestra api

    const api = async () => {
        await axios.get("http://localhost:8080/voices")
            .then(response => {
                setActorsTable(response.data);
              setActors(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    function filter() {
            var result = actorsTable.filter((actor) => {
                (actor.name.toString().toLowerCase().includes(search.toLowerCase())
                    || actor.category.toString().toLowerCase().includes(search.toLowerCase()))
                }
                
            );
            setActors(result);
        }
    

    function searching(e) {
        setSearch(e.target.value)
        filter(e.target.value);
    }
    console.log(search);

    console.log(actors)

  

    useEffect(() => {
        api();
    }, [])
    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" onChange={searching} placeholder="Busca tu personaje" />
            <button class="btn btn-outline-dark" type="submit" >Buscar</button>
        </form>
    )
}

export default Seeker
