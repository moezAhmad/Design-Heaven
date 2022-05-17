import React from "react";
import "../../App.scss"
import { CardList } from "../card-list/card-list.component";

export const Inspirations = ({inspirations})=>{
    if(inspirations){
        if(inspirations.length!==0){
            return(
                <div>
                    <CardList designs={inspirations} colorModifier="black"/>
                </div>
            )
        }
    }
    
    
}