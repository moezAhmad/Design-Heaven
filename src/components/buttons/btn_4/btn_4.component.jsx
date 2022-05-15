import React from "react";
import "../../../App.scss"

export const Btn_4 = ({ text, animation ,margin}) => {
    return (
        <div>
            <a className={`btn btn_4 btn__animated--${animation} ${margin}`} href="#">{text}</a>
        </div>
    )
}