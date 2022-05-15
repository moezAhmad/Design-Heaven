import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_3 = ({text,animation,clickable})=>{
    const handleClickAnimation = ()=>{
        return clickable ? "btn_3--clickable":""
    }
    return(
        <NavLink className={`btn btn_3 btn__animated--${animation} ${handleClickAnimation()}`} to="#">{text}</NavLink>
    )
}