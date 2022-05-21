import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../App.scss"
import { Btn_4 } from "../../../components/buttons/btn_4/btn_4.component";
import { data1 } from "../../../components/card-list/designsData";
import { NoRouteCardList } from "../../../components/card-list/noroute_card-list.component";
import { ExtraNotes } from "./extranotes.component";
import { Inspirations } from "./inspirations.component";

export const CompetitionDetailsBody = ({ details }) => {
    const location = useLocation()
    const [btn1, setBtn1] = useState("btn_4--white--selected")
    const [btn2, setBtn2] = useState("")
    useEffect(() => {
        if (location.pathname.includes("competition/brief")) {
            setBtn1("btn_4--white--selected")
            setBtn2("")


        }
        if (location.pathname.includes("competition/designs")) {
            setBtn1("")
            setBtn2("btn_4--white--selected")


        }
    })
    return (
        <div>
            <div className="profile__links u-padding-min">
                <Btn_4
                    text="Brief" to="/designer/competition/brief"
                    extendedStyle={`btn_4--white btn__animated--2 ${btn1} u-space-between`}
                />
                <Btn_4
                    text="Designs"
                    to="/designer/competition/designs"
                    extendedStyle={`btn_4--white btn__animated--2 ${btn2} u-space-between`}
                />
            </div>
            {
                location.pathname.includes("brief")
                &&
                <div>
                    <div className="competition__body">
                        <div>
                            <div className="left__display u-margin-bottom-small">
                                <p className="text text__key">{`Company/Organization Name:`}</p>
                                <p className="text text__value">{details.companyName}</p>
                            </div>
                            <div className="left__display u-margin-bottom-small">
                                <p className="text text__key">{`Tagline:`}</p>
                                <p className="text text__value">{details.tagLine}</p>
                            </div>
                            <div className="left__display u-margin-bottom-small">
                                <p className="text text__key">{`Logo Type:`}</p>
                                <p className="text text__value">{details.logoType}</p>
                            </div>
                            <div>
                                <p className="text text__key u-margin-bottom-small">{`Brief:`}</p>
                                <p className="text text__value">{details.brief}</p>
                            </div>
                        </div>
                        <div>
                            <div className="center__display u-margin-bottom-small">
                                <i className="fa fa-clock-o text text__key" style={{ fontSize: "3rem" }}></i>
                                <p className="text text__value">{details.hours} hours left</p>
                            </div>
                            <div className="center__display">
                                <i className="fa fa-bar-chart text text__key" style={{ fontSize: "3rem" }}></i>
                                <p className="text text__value">{details.entries} entries</p>
                            </div>
                        </div>
                    </div>
                    <Inspirations inspirations={details.inspirations} />
                    <ExtraNotes extraNotes={details.extraNotes} />
                </div>
            }
            {
                location.pathname.includes("designs")
                &&
                <div className="u-padding-min">
                    <NoRouteCardList designs={data1} extendedStyle={`black`}/>
                </div>
            }


        </div>

    )
}