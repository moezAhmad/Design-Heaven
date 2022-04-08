import React from "react";
import "../../App.scss"

export const HeadingSecondary = ({ text }) => {
    return (
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                {text.toUpperCase()}
            </h2>
        </div>
    )
}