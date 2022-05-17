import React, { useState } from "react";
import "../../App.scss";

import { BrowserRouter, Route, Link, Outlet, NavLink } from "react-router-dom";

export const Navbar = ({ navItems}) => {
    const handleColor = () => {
        return navItems.color === "white" ? "white" : "black"
    }

    const handleIsActive = (navData) => {

        if (navData.isActive) {
            return `btn nav--item nav--item--${handleColor()} nav--item--is_active--${handleColor()}`
        }
        else {
            return `btn nav--item nav--item--${handleColor()}`
        }


    }

    return (
        <div>
            <nav className="nav">

                <div className="nav__items nav__items--left">
                    <img src="./" className="nav--img" alt={navItems.logo.alt} style={{ width: navItems.logo.width }} />
                    {navItems.navItemsLeft.map((item) =>
                        <NavLink
                            key={item.id}
                            className={handleIsActive} to={item.to}
                        >


                            {item.navText}
                        </NavLink>
                    )}
                </div>
                <div className="nav__items nav__items--right">

                    {navItems.navItemsRight.map((item) => {
                        return (
                            <NavLink
                                key={item.id}
                                className={handleIsActive} to={item.to}
                            >
                                {item.navText}
                            </NavLink>
                        )
                    }
                    )}

                    <Link
                        key={navItems.logoText.id}
                        className={`btn nav--logo nav--logo--${handleColor()}`}
                        to={navItems.logoText.to}
                    >
                        {navItems.logoText.navText.toUpperCase()}
                    </Link>
                </div>

            </nav>
        </div>

    );
};
