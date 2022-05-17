import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_2 = ({ text,animation}) => {
    const handleAnimation = ()=>{
        if(animation){
            return `btn__animated--${animation}`
        }
        return ""
    }
    return (
        
            <NavLink className={`btn btn_2 btn_2--primary ${handleAnimation()}`} to="#">{text}</NavLink>
        

    )
}