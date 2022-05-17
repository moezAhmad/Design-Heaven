import React from "react";
import "../../../../App.scss"
import { Btn_5 } from "../../../buttons/btn_5/btn_5.component";
import { HeadingSecondary } from "../../../heading-secondary/heading-secondary.component";

export const ClientProfileHeader = ({ client }) => {
    return (
        <div className="profile--client__header__container">
            <img src={client.profilePic} alt="profile pic" className="profile--client__header__container__profile" />
            <div>
                <HeadingSecondary text={client.name} font_modifier="1" color_modifier="black" position="" />
                <div>
                    <Btn_5 text="Start a New Competition" animation="1" />
                </div>
            </div>
        </div>

    )
}