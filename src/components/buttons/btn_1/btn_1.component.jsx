import React from "react";
import "../../../App.scss"

export const Btn_1 = ({text,animation})=>{
    return(
        <a className={`btn btn_1 btn_1--green  btn__animated--${animation} `} href="#">{text}</a>
    )
}