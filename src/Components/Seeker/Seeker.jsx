import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
function Seeker() {
    let[actors, setActors] = useState([]);
    let[actorsTable, setActorsTable] = useState([]);
    let[search, setSearch] = useState("");

    //solo para prueba de funcion, se debe implementar luego nuestra api

    const api = async()=>{
        await axios.get("http://localhost:8080/voices")
        .then(response=>{
            setActors(response.data);
           
        }).catch(error=>{
            console.log(error);
        })
    }
    
    function filter(search){
        var result=actors.filter((actor)=>{
            if(actor.name.toString().toLowerCase().includes(search.toLowerCase())
            ||actor.category.toString().toLowerCase().includes(search.toLowerCase())){
                return actor
            }
        });
        setActors(result);
        
    }
    function searching(e){
        setSearch(e.target.value)
        filter(e.target.value);
    }
console.table(actors)



useEffect(()=>{
    api();
},[])
    return (
        <div>
            <input class="seeker-input" value={search} placeholder="Busqueda por nombre o categoria" onChange={searching}/>
            <button type="button" class="btn btn-secondary btn-sm m-1">Contratar</button>        
        </div>
    )
}

export default Seeker