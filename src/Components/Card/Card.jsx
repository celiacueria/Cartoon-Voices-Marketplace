import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


function Card(props) {

    const id = props.id;
    const editUrl = `/edit/${id}`;
    
   

    return (
        <div class="card " style={{ width: "18rem", height: "50vh" }} >
            <div class="card-img ">
                <img src={props.img}  alt={props.name} style={{width:"20vw", height:"20vw"}} />
               
            </div>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
            </div>
            <ul class="card-body-ul">
                <h5 class="card-title">{props.name}</h5>
                <li class="list-group-item">{props.category}</li>
                <li class="list-group-item">{props.price}</li>
                <li class="list-group-item">{props.email}</li>
            </ul>
            <div class="card-body-button">
                <Link to="/contact">
                    <button type="button" class="btn btn-secondary btn-sm m-1">Contratar</button>
                </Link>
                <Link to={editUrl}>
                    <button type="button" class="btn btn-secondary btn-sm m-1">Editar</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
