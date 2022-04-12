import React from "react";
import '../../App.scss'

export const Card = ({ design }) => {
    return (
        <div className="card">
            <img className="card-image" src={`https://robohash.org/${design.id}?set=set2&size=180x180`} />
            <div className="card-text">
                <h2 className="card-text--name u-margin-bottom-small">{design.name}</h2>
                <p className="card-text--email">{design.email}</p>
            </div>

        </div>
    )
}