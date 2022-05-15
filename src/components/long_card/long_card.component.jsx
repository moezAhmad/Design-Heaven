import React from "react";
import "../../App.scss"
import { Btn_3 } from "../buttons/btn_3/btn_3.component";
import { Btn_4 } from "../buttons/btn_4/btn_4.component";
import { HeadingSecondary } from "../heading-secondary/heading-secondary.component";

export const LongCard = ({competition}) => {
    return (
        <div className="card--long">
            <img src={competition.mainLogo} className="card__image" alt="image" />
            <div className="card--long__details">
                <HeadingSecondary text={competition.title} font_modifier="3" color_modifier="black" position="" />

                {competition.types.map(item => <Btn_3 text={item} animation="2" clickable={false} />)}

                <p className="card--long__details__client">by {competition.client}</p>
                <p className="card--long__details__brief">{competition.details}</p>
            </div>
            <div className="card--log__status">
                <div>
                    <i class="fa fa-clock-o" style={{fontSize:"3rem"}}></i>
                    <p className="card--log__status__time">{competition.hours} hours left</p>
                </div>
                <div>
                    <i class="fa fa-bar-chart" style={{fontSize:"3rem"}}></i>
                    <p className="card--log__status__entries">{competition.entries} entries</p>
                </div>
                <Btn_4 text="Apply" animation="2" />
            </div>


        </div>
    )
}