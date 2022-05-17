import React from "react";
import { useOutletContext } from "react-router-dom";
import "../../../App.scss"
import { CompetitionDetailsBody } from "../../../components/body_competition_details/body_competition_details.component";
import { CompetitionDetailsHeader } from "../../../components/header_competition_details/header_competition_details.component";

export const DesignerCompetitionDetails = ()=>{
    const [compDetails, setCompDetails] = useOutletContext({})
    return(
        <div>
            <CompetitionDetailsHeader title = {compDetails.title}/>
            <CompetitionDetailsBody details = {compDetails}/>
        </div>
    )
}