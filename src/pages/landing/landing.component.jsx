import React from "react";
import '../../App.scss'
import { LandingHeader } from "../../layouts/landing_page/header/header.component";
import { PastDesigns } from "../../layouts/landing_page/past_designs/past_designs.component";
import { LandingFooter } from "../../layouts/landing_page/footer/footer.component";
import { Testimoials } from "../../layouts/landing_page/testimonials/testimonials.component";
import { Btn_3 } from "../../components/buttons/btn_3/btn_3.component";
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
                <LandingFooter/>

            </div>
        )
    }
}