import React from "react";
import "../../../App.scss"

export const Btn_3 = ({text,animation,clickable})=>{
    const handleClickAnimation = ()=>{
        return clickable ? "btn_3:hover btn_3:active":""
    }
    return(
        <a className={`btn btn_3 btn__animated--${animation} ${handleClickAnimation()}`} href="#">{text}</a>
    )
}