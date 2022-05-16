import React from "react";
import "../../App.scss"
import { Btn_3 } from "../buttons/btn_3/btn_3.component";
import { HeadingSecondary } from "../heading-secondary/heading-secondary.component";
export const DesignerProfileHeader = ({ designer }) => {
    return (
        <div>
            <HeadingSecondary text={designer.name} font_modifier="1" color_modifier="black" position="testimonials-past-format" />
            <div className="profile--designer__header__container" style={{ backgroundImage: `url(${designer.coverPic})` }}>
                <img className="profile--designer__header__container__profile" src={designer.profilePic} alt="Profile Pic"/>
                <Btn_3 text ="Edit Cover" animation="2" clickable = {true} position = "u-pos-bottom-right"/>
            </div>
        </div>
    )
}