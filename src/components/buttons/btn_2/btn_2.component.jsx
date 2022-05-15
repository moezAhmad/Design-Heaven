import React from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_2 = ({ text,animation}) => {
    return (
        <div>
            <NavLink className={`btn btn_2 btn_2--primary btn__animated--${animation} u-margin-bottom-medium`} to="#">{text}</NavLink>
        </div>

    )
}