import React from "react";
import "../../App.scss"

export const HeadingSecondary = ({ text, modifier}) => {
    return (
        <div className="u-center-text u-margin-bottom-big">
            <h2 className={`heading-secondary heading-secondary--`+modifier}>
                {text.toUpperCase()}
            </h2>
        </div>
    )
}