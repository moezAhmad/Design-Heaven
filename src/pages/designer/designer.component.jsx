import React, { useState } from "react";
import '../../App.scss'
import { ProfileHeader } from "../../layouts/profile_header/profile_header.component";
import { Outlet } from "react-router-dom";
export const DesignerPage = () => {
    const [compDetails, setCompDetails] = useState([])

    return (
        <div>
            <ProfileHeader />
            <Outlet context={[compDetails, setCompDetails]}/>
        </div>
    )


}