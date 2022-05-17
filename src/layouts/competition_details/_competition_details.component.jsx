import React from "react";
import { useOutletContext } from "react-router-dom";
import "../../App.scss"

export const CompetitionDetails = ()=>{
    const [compDetails, setCompDetails] = useOutletContext({})
    console.log(compDetails)
    return(
        <div>
            compDetails
        </div>
    )
}