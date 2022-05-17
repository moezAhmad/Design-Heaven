import React from "react";
import { Outlet } from "react-router-dom";
import "../../App.scss"
import { ProfileHeader } from "../../layouts/profile_header/profile_header.component";

export const ClientPage = ()=>{
    return(
        <div>
            <ProfileHeader/>
            <Outlet/>
        </div>
    )
}