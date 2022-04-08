import React from "react";
import '../../App.scss'

export const Card = ({design}) => {
    return (
        <div className="card-container">
                <img src={`https://robohash.org/${design.id}?set=set2&size=180x180`}/>
                <h2>{design.name}</h2>
                <p>{design.email}</p>      
        </div>
    )
}