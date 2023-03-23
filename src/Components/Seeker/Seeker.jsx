import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
function Seeker() {
    let[actors, setActors] = useState([]);
    let[actorsTable, setActorsTable] = useState([]);
    let[search, setSearch] = useState("");

    //solo para prueba de funcion, se debe implementar luego nuestra api

    const api = async()=>{
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.table(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

useEffect(()=>{
    api();
},[])
    return (
        <div>
        
        </div>
    )
}

export default Seeker