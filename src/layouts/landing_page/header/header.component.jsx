import React from "react";
import { Navbar } from "../../../components/navbar/navbar.component";
import { TextBox } from "../../../components/textbox/TextBox.component";
import "../../../App.scss"

const navItems = {
    navItemsLeft: [
        {
            id: 1,
            text: 'About',
            to: '/about'
        },
        {
            id: 2,
            text: 'FAQs',
            to: '/faqs'
        },
        {
            id: 3,
            text: 'Hire',
            to: '/hire'
        },
        {
            id: 4,
            text: 'Apply',
            to: '/apply'
        }
    ],
    navItemsRight: {
        text: [
            {
                id: 1,
                text: "Help Center",
                to: 'help_center'
            },

        ],
        logo: {
            id: 2,
            text: 'g',
            to: '/'
        }
    }
}

export const LandingHeader = () => {
    return (
        <div className="landing__header">
            <Navbar navItems={navItems} />
            <TextBox />
        </div>
    )
}