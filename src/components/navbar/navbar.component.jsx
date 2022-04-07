import React, { useState } from "react";
import "../../App.scss";

import { BrowserRouter, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="nav">
            <BrowserRouter>
                <div className="nav__items nav__items--left">
                    <NavLink className="btn nav--item" to="">About</NavLink>
                    <NavLink className="btn nav--item" to="">FAQs</NavLink>
                    <NavLink className="btn nav--item" to="">Hire</NavLink>
                    <NavLink className="btn nav--item" to="">Apply</NavLink>
                </div>
                <div className="nav__items nav__items--right">
                    <NavLink className="btn nav--item" to="">Help Center</NavLink>
                     <div className="nav--logo"></div>
                </div>
            </BrowserRouter>
        </nav>
    );
};
