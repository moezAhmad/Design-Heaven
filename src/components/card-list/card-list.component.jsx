import React from "react";
import "../../App.scss"
import { Card } from "../card/card.component";


export const CardList = ({designs}) => {
    return (<div className="card-list">
        {
            designs.map(design=><Card key = {design.id} design={design}/>)
        }
        
    </div>
    )
}