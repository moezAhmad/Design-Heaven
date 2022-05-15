import React from "react";
import '../../App.scss'
import { ProfileHeader } from "../../layouts/profile_header/profile_header.component";
import { Outlet } from "react-router-dom";
import { CompetitionContainer } from "../../layouts/competitions_container/competitions_container.component";
export class DesignerPage extends React.Component{

    render(){
        return(
            <div>
                <ProfileHeader/>
                <Outlet />
                <CompetitionContainer/>
            </div>
        )
    }
    
}