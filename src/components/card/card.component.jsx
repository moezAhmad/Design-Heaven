import React, { useContext } from "react";
import { useNavigate, } from "react-router-dom";
import '../../App.scss'
import { detailedCompetition } from "../long_card/designerEndDetails";
import { CompetitionDetailsContext } from "../../pages/main.component";


export const Card = ({ design, extendedStyle }) => {
    const { competitionDetails } = useContext(CompetitionDetailsContext)
    const [compDetails, setCompDetails] = competitionDetails
    let navigate = useNavigate();

    const handleExtendedStyle = () => {
        if (extendedStyle) {
            return `${extendedStyle}`
        }
        return ""
    }
    const handleOnClick = (e) => {
        setCompDetails(detailedCompetition)
        navigate("#")


    }
    return (
        <div
            className={`card ${handleExtendedStyle()}`}
            onClick={e => handleOnClick(e)}
        >
            <img className="card-image card--hoverEffect-image" src={design.inspirations[0]} />
            <div className="card-text card--hoverEffect-text">
                <h2 className="card-text--name u-margin-bottom-small">{design.CompanyName}</h2>
                <p className="card-text--email">{design.Tagline}</p>
            </div>

        </div>
    )
}