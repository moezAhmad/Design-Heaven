import React from "react";
import { Outlet } from "react-router-dom";
import "../../App.scss";
import { Navbar } from "../../components/navbar/navbar.component";
import { HeadingSecondary } from "../../components/heading-secondary/heading-secondary.component";
const navItems = {
    color: "white",
    navItemsLeft: [
        {
            id: 1,
            text: 'Dashboard',
            to: 'dashboard'
        },
        {
            id: 2,
            text: 'Competition',
            to: 'competition'
        },
        {
            id: 3,
            text: 'Profile',
            to: 'profile'
        },

    ],
    navItemsRight: [
        {
            id: 1,
            text: "Help Center",
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
        text: 'g',
        to: '/account'
    }
}
export class ProfileHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            heading: "Dashboard",
        }
    }
    headingHandler = (e, str) => {
        console.log(str)
        this.setState({ heading: str })
        return true;

    }
    render() {
        return (
            <div>
                <div className="profile__header">
                    <Navbar navItems={navItems} headingHandler={this.headingHandler} />
                    <HeadingSecondary text={this.state.heading} modifier="black" position="testimonials-past-format" />
                </div>
                <Outlet />
            </div>

        )
    }
}