import React from "react";
import { Navbar } from "../../../components/navbar/navbar.component";
import { TextBox } from "../../../components/textbox/TextBox.component";
import { Btn_3 } from "../../../components/buttons/btn_3/btn_3.component";
import "../../../App.scss"
import { Outlet } from "react-router-dom";

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
    navItemsRight: [
        {
            id: 1,
            text: "Help Center",
            to: 'help_center'
        },

    ],  
    logo:{
        content:"../../abstracts/images/logo_1.svg",
        alt:"",
        width:"0px",
        
    },
    logoText: {
        id: 2,
        text: 'g',
        to: '/account'
    }
}

export class LandingHeader extends React.Component {
    render(){
        return (
            <div className="landing__header">
                <Navbar navItems={navItems} />
                <Outlet/>
                <TextBox />
            </div>
        )
    }
}