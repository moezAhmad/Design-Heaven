import React from "react";
import "../../App.scss"
import { Btn_1 } from "../buttons/btn_1/btn_1.component";
import { Btn_2 } from "../buttons/btn_2/btn_2.component";
import { HeadingPrimary } from "../heading-primary/heading-primary.component";

export const TextBox = () => {
    return (
        <div className="text-box">
            <img src="./" className="text-box__logo u-margin-bottom-small" alt="logo"></img>
            <HeadingPrimary mainText="Get your dream" subText="design job done!" />
            <div>
                <Btn_1 text="Hire a designer" animation="1" />
            </div>
            <div>
                <Btn_2 text="Apply as a designer" animation="2" />
            </div>

        </div>
    )
}