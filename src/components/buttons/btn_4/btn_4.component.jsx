import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_4 = ({ text, animation, margin, routeTo, selected, extendedClass}) => {
    const handleActiveButton = (e,selected) => {
        if(selected){
            if(e.target.text ==="Current"){
                selected(1)
            }
            if(e.target.text ==="Past"){
                selected(2)
            }
            if(e.target.text ==="About"){
                selected(3)
            }
        }
    }
    return (
        <NavLink
            className={`btn btn_4 btn__animated--${animation} ${margin} ${extendedClass}`}
            to={routeTo}
            onClick={(e) => handleActiveButton(e,selected)}
        >
            {text}
        </NavLink>
    )
}