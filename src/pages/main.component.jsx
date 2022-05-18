import React, { useState } from "react";
import '../App.scss'
import { ProfileHeader } from "..//layouts/profile_header/profile_header.component";
import { Outlet } from "react-router-dom";
export const CompetitionDetailsContext = React.createContext()


export const MainPage = () => {
    const [compDetails, setCompDetails] = useState({})

    return (
        <div>
            <ProfileHeader />
            <CompetitionDetailsContext.Provider value={{competitionDetails:[compDetails, setCompDetails]}}>
                <Outlet />
            </CompetitionDetailsContext.Provider>


        </div>
    )


}