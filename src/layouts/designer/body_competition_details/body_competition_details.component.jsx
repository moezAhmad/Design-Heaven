import React from "react";
import "../../../App.scss"
import { ExtraNotes } from "./extranotes.component";
import { Inspirations } from "./inspirations.component";

export const CompetitionDetailsBody = ({ details }) => {
    return (
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
            <Inspirations inspirations={details.inspirations}/>
            <ExtraNotes extraNotes={details.extraNotes}/>
        </div>

    )
}