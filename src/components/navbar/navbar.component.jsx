import React, { useState } from "react";
import "../../App.scss";

import { BrowserRouter, NavLink,Route ,Link} from "react-router-dom";

export const Navbar = ({ navItems }) => {
    const handleColor = ()=>{
        return navItems.color==="white" ?"white":"black"
    }
    return (
        <nav className="nav">
           
                <div className="nav__items nav__items--left">
                    <img src="./" className="nav--img" alt={navItems.logo.alt} style={{width:navItems.logo.width}}/>
                    {navItems.navItemsLeft.map((item) =>
                        <NavLink key={item.id} className={`btn nav--item nav--item--${handleColor()}`} to={item.to}>{item.text}</NavLink>
                    )}
                </div>
                <div className="nav__items nav__items--right">

                    {navItems.navItemsRight.map((item) => {
                        return (
                            <NavLink key={item.id} className={`btn nav--item nav--item--${handleColor()}`} to={item.to}>{item.text}</NavLink>
                        )
                    }
                    )}
                      
                    <Link key={navItems.logoText.id} className={`btn nav--logo nav--logo--${handleColor()}`} to={navItems.logoText.to}>{navItems.logoText.text.toUpperCase()}</Link>
                </div>
           
        </nav>
    );
};
