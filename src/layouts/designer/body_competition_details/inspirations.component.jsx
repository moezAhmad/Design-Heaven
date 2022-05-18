import React from "react";
import "../../../App.scss"
import { CardList } from "../../../components/card-list/card-list.component";

export const Inspirations = ({inspirations})=>{
    if(inspirations){
        if(inspirations.length!==0){
            return(
                <div>
                    <p className="competition__body__condition text text__key">Inspirations: </p>
                    <CardList designs={inspirations} extendedStyle={`black`}/>
                </div>
            )
        }
    }
    
    
}