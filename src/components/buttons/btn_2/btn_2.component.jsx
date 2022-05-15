import React from "react";
import "../../../App.scss"

export const Btn_2 = ({ text,animation}) => {
    return (
        <div>
            <a className={`btn btn_2 btn_2--primary btn__animated--${animation} u-margin-bottom-medium`} href="#">{text}</a>
        </div>

    )
}