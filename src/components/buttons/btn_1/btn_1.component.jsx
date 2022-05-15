import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_1 = ({text,animation})=>{
    return(
        <NavLink className={`btn btn_1 btn_1--green  btn__animated--${animation} `} to="#">{text}</NavLink>
    )
}