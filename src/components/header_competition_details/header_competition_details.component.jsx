import React from "react";
import "../../App.scss"
import { Btn_3 } from "../buttons/btn_3/btn_3.component";
import { HeadingSecondary } from "../heading-secondary/heading-secondary.component";

export const CompetitionDetailsHeader = ({ title }) => {
    return (
        <div className="competition__header">
            <div className="competition__header__pos">
                <HeadingSecondary text={title} font_modifier="1" color_modifier="black" position="" />
                <Btn_3 text='Submit Designs' animation="2" clickable={true} position="u-pos-top-right" />
            </div>

        </div>
    )
}