import React from "react";
import "../../../App.scss"
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";
import { TextSlider } from "../../../components/text-slider/text-slider.component";
export class Testimoials extends React.Component{
    constructor(){
        super()

    }
    
    render(){
        return(
            <div className="landing__testimonials">
                <HeadingSecondary text="Testimonials" modifier="black"/>
                <TextSlider/>
            </div>
        )
    }
}