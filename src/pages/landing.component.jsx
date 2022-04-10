import React from "react";
import '../App.scss'
import { LandingHeader } from "../layouts/landing_page/header/header.component";
import { PastDesigns } from "../layouts/landing_page/past_designs/past_designs.component";
import { LandingFooter } from "../layouts/landing_page/footer/footer.component";

export class LandingPage extends React.Component{
    constructor (){
        super()
    }
    render(){
        return(
            <div>
                <LandingHeader/>
                <PastDesigns/>
                <LandingFooter/>

            </div>
        )
    }
}