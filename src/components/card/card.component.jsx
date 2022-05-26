import React, { useContext } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import '../../App.scss'
import { detailedCompetition } from "../long_card/designerEndDetails";
import { CompetitionDetailsContext } from "../../pages/main.component";


export const Card = ({ design, extendedStyle }) => {
    const { competitionDetails } = useContext(CompetitionDetailsContext)
    const [compDetails, setCompDetails] = competitionDetails
    const navigate = useNavigate();
    const location = useLocation()



    const handleExtendedStyle = () => {
        if (extendedStyle) {
            return `${extendedStyle}`
        }
        return ""
    }
    const handleOnClick = (e) => {
        
        setCompDetails(detailedCompetition)
        if(location.pathname.includes("/client/competition/designs")){
            navigate("/client/choose_winner")
        }
        else if(location.pathname.includes("designer")){
            navigate("/designer/competition/brief")
        }
        else if(location.pathname.includes("client")){
            navigate("/client/competition/brief")
        }
        


    }
    return (
        <div
            className={`card ${handleExtendedStyle()}`}
            onClick={e => handleOnClick(e)}
        >
            <img className="card-image card--hoverEffect-image" src={`https://robohash.org/${design.id}?set=set2&size=180x180`} />
            <div className="card-text card--hoverEffect-text">
                <h2 className="card-text--name u-margin-bottom-small">{design.name}</h2>
                <p className="card-text--email">{design.email}</p>
            </div>

        </div>
    )
}