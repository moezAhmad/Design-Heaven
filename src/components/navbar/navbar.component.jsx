import React, { useState } from "react";
import "../../App.scss";

import { BrowserRouter, NavLink } from "react-router-dom";

export const Navbar = ({ navItems }) => {
    return (
        <nav className="nav">
            <BrowserRouter>
                <div className="nav__items nav__items--left">
                    {navItems.navItemsLeft.map((item) =>
                        <NavLink key={item.id} className="btn nav--item" to={item.to}>{item.text}</NavLink>
                    )}
                </div>
                <div className="nav__items nav__items--right">

                    {navItems.navItemsRight.text.map((item) => {
                        return (
                            <NavLink key={item.id} className="btn nav--item" to={item.to}>{item.text}</NavLink>
                        )
                    }
                    )}
                    <div key={navItems.navItemsRight.logo.id} className="btn nav--logo" to={navItems.navItemsRight.logo.to}>{navItems.navItemsRight.logo.text.toUpperCase()}</div>
                </div>
            </BrowserRouter>
        </nav>
    );
};
