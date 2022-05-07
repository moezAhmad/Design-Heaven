import React from "react";
import "../../App.scss"

export const SocialButn = ({ srcurl ,text }) => {
    return (
        <div className="social-btn">
            <div className ="social-icon-wrapper">
                <img className="social-icon" src={ srcurl } />
            </div>
            <p className="btn-text"><b>{text}</b></p>
        </div>
    )
}

