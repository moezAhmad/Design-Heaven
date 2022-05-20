import React from "react";
import "../../../App.scss"
import { Btn_3 } from "../../buttons/btn_3/btn_3.component";

export const DesignerSignupForm = () => {
    return (
        <form className="signup__form">
            <div className="signup__form__group">
                <label htmlFor="first_name" className="signup__form__label">First Name</label>
                <input type="text" className="signup__form__input" id="first_name" required />

            </div>
            <div className="signup__form__group">
                <label htmlFor="last_name" className="signup__form__label">Last Name</label>
                <input type="text" className="signup__form__input" id="last_name" required />

            </div>
            <div className="signup__form__group">
                <label htmlFor="email" className="signup__form__label">Email</label>
                <input type="email" className="signup__form__input" id="email" required />

            </div>
            <div className="signup__form__group">
                <label htmlFor="password" className="signup__form__label">Password</label>
                <input type="password" className="signup__form__input" id="password" required />

            </div>
            <div className="signup__form__group">
                <label htmlFor="confirm_password" className="signup__form__label">Confirm Password</label>
                <input type="password" className="signup__form__input" id="confirm_password" required />

            </div>
            <div className="signup__form__group">
                <label htmlFor="portfolio" className="signup__form__label">{`Add Portfolio (Behance, Dribble etc.)`}</label>
                <input type="text" className="signup__form__input" id="portfolio" />

            </div>

            <Btn_3 text='Apply' extendedStyle="btn_3--green btn_3--clickable btn__animated--2 btn_3--full-width" />


        </form>
    )
}