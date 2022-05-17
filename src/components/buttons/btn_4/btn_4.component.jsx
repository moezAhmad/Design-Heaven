import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../App.scss"

export const Btn_4 = ({ text, animation, routeTo, selected, extendedClass }) => {
    const handleActiveButton = (e, selected) => {
        if (selected) {
            if (e.target.text === "Current") {
                selected(1)
            }
            else if (e.target.text === "Past") {
                selected(2)
            }
            else if (e.target.text === "About") {
                selected(3)
            }
            else {
                selected()
            }
        }
        else {
            return ""
        }

    }
    const handleAnimation = () => {
        if (animation) {
            return `btn__animated--${animation}`
        }
        return ""
    }
    const handleRouteTo = () => {
        if (routeTo) {
            return routeTo
        }
        return ""
    }
    const handleExtendedClass = () => {
        if (extendedClass) {
            return extendedClass
        }
        return ""
    }

    return (
        <NavLink
            className={`btn btn_4 ${handleAnimation()}  ${handleExtendedClass()}`}
            to={handleRouteTo()}
            onClick={(e) => handleActiveButton(e, selected)}
        >
            {text}
        </NavLink>
    )
}