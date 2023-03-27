import React, { useState } from 'react'
import './Card.css'






function Card(props) {
    

    

    return (
        <div class="card "style={{width: "18rem"}} >
            <div class="card-img ">
            <img src=                 ""
/>  
            </div>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
            </div>
            <ul class="card-body-ul">
                <li class="list-group-item">{props.category}</li>
                <li class="list-group-item">{props.price}</li>
                <li class="list-group-item">{props.email}</li>
            </ul>
            <div class="card-body-button">
                <button type="button" class="btn btn-secondary btn-sm m-1">Contratar</button>
            </div>
        </div>
    )
} 

export default Card
