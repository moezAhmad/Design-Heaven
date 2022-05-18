import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_4 = ({text,extendedStyle, onClick, to}) => {
    const handleOnClick = (e, selected) => {
        if (selected) {
            if (e.target.text === "Current") {
                onClick(1)
            }
            else if (e.target.text === "Past") {
                onClick(2)
            }
            else if (e.target.text === "About") {
                onClick(3)
            }
            else {
                onClick()
            }
        }
        else {
            return ""
        }
    }

        const handleExtendedStyle = ()=>{
            if(extendedStyle){
                return `${extendedStyle}`
            }
            return ""
        }
        
        const handleTo =()=>{
            if(to){
                return `${to}`
            }
            else{
                return ""
            }
        }
    return (
        <NavLink
            className={`btn btn_4 ${handleExtendedStyle()}`}
            to={handleTo()}
            onClick={(e) => handleOnClick(e, onClick)}
        >
            {text}
        </NavLink>
    )
}