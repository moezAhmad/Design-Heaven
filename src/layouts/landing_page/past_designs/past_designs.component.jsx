import React from "react";
import "../../../App.scss"
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";

export class PastDesigns extends React.Component {
    render() {
        return (
            <div className="landing__past_designs">
                <HeadingSecondary text="Past Winning Designs" />
            </div>

        )
    }
}