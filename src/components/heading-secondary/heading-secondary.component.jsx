import React from "react";
import "../../App.scss"

export const HeadingSecondary = ({ text, modifier, position}) => {
    return (
        <div className={`${position} u-margin-bottom-small`}>
            <h2 className={`heading-secondary heading-secondary--`+modifier}>
                {text}
            </h2>
        </div>
    )
}