import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss";

export const Btn_5 = ({ text, animation, routeTo, extendedClass})=>{
    const handleAnimation = ()=>{
        if(animation){
            return `btn__animated--${animation}`
        }
        return ""
    }
    const handleRouteTo = ()=>{
        if(routeTo){
            return routeTo
        }
        return ""
    }
    const handleExtendedClass = ()=>{
        if(extendedClass){
            return extendedClass
        }
        return ""
    }
    return(
        <NavLink
            className={`btn btn_5 ${handleAnimation()}  ${handleExtendedClass()}`}
            to={handleRouteTo()}
        >
            {text}
        </NavLink>
    )
}