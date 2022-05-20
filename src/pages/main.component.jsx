import React, { useState } from "react";
import '../App.scss'
import { ProfileHeader } from "..//layouts/profile_header/profile_header.component";
import { Outlet } from "react-router-dom";
export const CompetitionDetailsContext = React.createContext()


export const MainPage = () => {
    const [compDetails, setCompDetails] = useState({})
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
    return (
        <div>
            <ProfileHeader navItems={navItems}/>
            <CompetitionDetailsContext.Provider value={{competitionDetails:[compDetails, setCompDetails]}}>
                <Outlet />
            </CompetitionDetailsContext.Provider>


        </div>
    )


}