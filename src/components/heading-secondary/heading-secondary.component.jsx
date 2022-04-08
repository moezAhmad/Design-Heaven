import React from "react";
import "../../App.scss"

export const HeadingSecondary = ({ text }) => {
    return (
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                {text.toUpperCase()}
            </h2>
        </div>
    )
}