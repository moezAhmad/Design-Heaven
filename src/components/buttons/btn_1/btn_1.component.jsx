import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_1 = ({text,animation})=>{
    const handleAnimation = ()=>{
        if(animation){
            return `btn__animated--${animation}`
        }
        return ""
    }
    return(
        <NavLink className={`btn btn_1 btn_1--green  ${handleAnimation()} `} to="#">{text}</NavLink>
    )
}