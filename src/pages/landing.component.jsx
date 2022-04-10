import React from "react";
import '../App.scss'
import { LandingHeader } from "../layouts/landing_page/header/header.component";
import { PastDesigns } from "../layouts/landing_page/past_designs/past_designs.component";
import { Testimoials } from "../layouts/landing_page/testimonials/testimonials.component";
export class LandingPage extends React.Component{
    constructor (){
        super()
    }
    render(){
        return(
            <div>
                <LandingHeader/>
                <PastDesigns/>
                <Testimoials/>
            </div>
        )
    }
}