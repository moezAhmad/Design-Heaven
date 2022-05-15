import React from "react";
import "../../App.scss"

export const HeadingSecondary = ({ text, color_modifier,font_modifier, position}) => {
    return (
        <div className={`${position} u-margin-bottom-small`}>
            <h2 className={`heading-secondary heading-secondary--${font_modifier} heading-secondary--${color_modifier}`}>
                {text}
            </h2>
        </div>
    )
}