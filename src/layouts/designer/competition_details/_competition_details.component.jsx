import React from "react";
import { useOutletContext } from "react-router-dom";
import "../../../App.scss"
import {CompetitionDetailsBody} from "../body_competition_details/body_competition_details.component";
import {CompetitionDetailsHeader} from "../../../components/designer_components/header/header_competition_details/header_competition_details.component"
export const DesignerCompetitionDetails = ()=>{
    const [compDetails, setCompDetails] = useOutletContext({})
    return(
        <div>
            <CompetitionDetailsHeader title = {compDetails.title}/>
            <CompetitionDetailsBody details = {compDetails}/>
        </div>
    )
}