import React from "react";
import '../../App.scss'
import { Navbar } from "../../components/navbar/navbar.component";
const navItems = {
    color:"white",
    navItemsLeft: [
        {
            id: 1,
            text: 'Dashboard',
            to: '/dashboard'
        },
        {
            id: 2,
            text: 'Competition',
            to: '/competition'
        },
        {
            id: 3,
            text: 'Profile',
            to: '/profile'
        },
       
    ],
    navItemsRight: [
        {
            id: 1,
            text: "Help Center",
            to: '/help_center'
        },

    ],  
    logo:{
        content:"../../abstracts/images/logo_1.svg",
        alt:"",
        width:"15%",
        
    },
    logoText: {
        id: 2,
        text: 'g',
        to: '/account'
    }
}
export class DashboardDesigner extends React.Component{

    render(){
        return(
            <div>
                <Navbar navItems={navItems}/>
            </div>
        )
    }
    
}