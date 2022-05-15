import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_4 = ({ text, animation ,margin}) => {
    return (
        <div>
            <NavLink className={`btn btn_4 btn__animated--${animation} ${margin}`} to="/designer/competition">{text}</NavLink>
        </div>
    )
}