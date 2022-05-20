import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.scss"
import { HeadingSecondary } from "../../components/heading-secondary/heading-secondary.component";
import { SigninForm } from "../../components/signin_form/signinform.component";

export const AuthLayout = () => {
    const location = useLocation()
    return (
        <div>

            {
                location.pathname.includes("signin")
                &&
                <div>
                    <div className="profile--designer__header u-center-text u-padding-min">
                        <HeadingSecondary
                            text="Sign In"
                            extendedStyle={`heading-secondary--black heading-secondary--1 `}
                        />
                    </div>
                    <div className="container">
                        <SigninForm />
                    </div>
                </div>
            }
            {
                location.pathname.includes("signup")
                &&
                <div>
                    <div className="profile--designer__header u-margin-bottom-small u-center-text u-padding-min">
                        <HeadingSecondary
                            text="Sign Up"
                            extendedStyle={`heading-secondary--black heading-secondary--1 `}
                        />
                    </div>
                    <div className="container">
                        <SigninForm />
                    </div>
                </div>

            }

        </div>
    )
}