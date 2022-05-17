import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_3 = ({text,animation,clickable, position})=>{
    const handleClickAnimation = ()=>{
        return clickable ? "btn_3--clickable":""
    }
    const handleAnimation = ()=>{
        if(animation){
            return `btn__animated--${animation}`
        }
    }
    const handlePosition=()=>{
        if(position){
            return position
        }
    }
    return(
        <NavLink className={`btn btn_3 ${handleAnimation()} ${handleClickAnimation()} ${handlePosition()}`} to="#">{text}</NavLink>
    )
}