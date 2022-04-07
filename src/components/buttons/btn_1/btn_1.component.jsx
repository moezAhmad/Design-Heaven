import React from "react";
import "../../../App.scss"

export const Btn_1 = ({text})=>{
    return(
        <a className="btn btn_1 btn_1--green btn_1--animated u-margin-bottom-medium" href="#">{text}</a>
    )
}