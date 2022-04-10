import React from "react";
import "../../App.scss"

export const HeadingSecondary = ({ text, modifier}) => {
    return (
        <div className="testimonials-past-format">
            <h2 className={`heading-secondary heading-secondary--`+modifier}>
                {text}
            </h2>
        </div>
    )
}