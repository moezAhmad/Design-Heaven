import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.scss"
import { Btn_3 } from "../../components/buttons/btn_3/btn_3.component"
import { SocialButn } from "../../layouts/Accounts/Social_login_bttn.component";
import google_photo from "./img/Google__G__Logo.svg"
import facebook_photo from "./img/facebook-new.png"


export const SigninForm = () => {
    return (
        <div className="signin_container">
            <div className="signin__logo">
                <div className="signin__logo__designer">
                    <div className="signin__logo__client">
                        Client
                    </div>
                    Designer
                </div>
            </div>
            <form className="signin__form">
                <div className="signin__form__group">
                    <label htmlFor="email" className="signin__form__label">Email</label>
                    <input type="email" className="signin__form__input" id="email" required />

                </div>
                <div className="signin__form__group">
                    <label htmlFor="password" className="signin__form__label">Password</label>
                    <input type="password" className="signin__form__input" id="password" required />

                </div>
                <div className="signin__form__grid">
                    <Btn_3 text='Sign In as Client' extendedStyle="btn_3--green btn_3--clickable btn__animated--2" />
                    <Btn_3 text='Sign In as Designer' extendedStyle="btn_3--green btn_3--clickable btn__animated--2" />
                </div>

                <p className="signin__form__route">
                    Donot have an account? Signup as a
                    <NavLink className="btn signin__form__route--to" to="#">Client</NavLink>
                    or
                    <NavLink className="btn signin__form__route--to" to="#">Designer</NavLink>
                </p>
                <div className="signin__form__grid">
                    <div >
                        <SocialButn srcurl={facebook_photo} text="Login in with Facebook" />
                    </div>
                    <div >
                        <SocialButn srcurl={google_photo} text="Login in with Google" />
                    </div>
                </div>
            </form>
        </div>
    )
}