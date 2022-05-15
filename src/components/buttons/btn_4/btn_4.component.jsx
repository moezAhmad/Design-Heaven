import React from "react";
import "../../../App.scss"

export const Btn_4 = ({ text, animation }) => {
    return (
        <div>
            <a className={`btn btn_4 btn__animated--${animation}`} href="#">{text}</a>
        </div>
    )
}