import React from "react";
import "../../App.scss"
import { LongCard } from "../long_card/long_card.component";


export const LongCardList = ({competitions}) => {
    return (<div className="long__card-list">
        {
            competitions.map(competition=><LongCard key = {competition.id} competition={competition}/>)
        }
        
    </div>
    )
}