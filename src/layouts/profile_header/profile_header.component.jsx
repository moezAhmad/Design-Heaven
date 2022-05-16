import React from "react";
import { Outlet } from "react-router-dom";
import "../../App.scss";
import { Navbar } from "../../components/navbar/navbar.component";
const { faker } = require('@faker-js/faker');
const navItems = {
    color: "white",
    navItemsLeft: [
        {
            id: 1,
            navText: 'Dashboard',
            to: 'dashboard'
        },
        {
            id: 2,
            navText: 'Competition',
            to: 'competition'
        },
        {
            id: 3,
            navText: 'Profile',
            to: 'profile/current'
        },

    ],
    navItemsRight: [
        {
            id: 1,
            navText: "Help Center",
            to: 'helpcenter'
        },

    ],
    logo: {
        content: "../../abstracts/images/logo_1.svg",
        alt: "",
        width: "15%",

    },
    logoText: {
        id: 2,
        navText: 'g',
        to: '/account'
    }
}
export class ProfileHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="profile__header">
                    <Navbar navItems={navItems} />
                </div>
            </div>

        )
    }
}