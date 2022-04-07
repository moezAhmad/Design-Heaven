import React from "react";
import "../../App.scss"
import { Btn_1 } from "../buttons/btn_1/btn_1.component";
import { Btn_2 } from "../buttons/btn_2/btn_2.component";
import { Btn_3 } from "../buttons/btn_3/btn_3.component";
import { HeadingPrimary } from "../heading-primary/heading-primary.component";

export const TextBox = () => {
    return (
        <div className="text-box">
            <img src="./" className="text-box__logo u-margin-bottom-small" alt="logo"></img>
            <HeadingPrimary />
            <Btn_1 text = "Hire a designer"/>
            <Btn_2 text = "Apply as a designer"/>
            <Btn_3 text = "&#8595;"/>
        </div>
    )
}