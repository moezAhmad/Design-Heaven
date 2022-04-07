import React from "react";
import '../App.scss'
import { LandingHeader } from "../layouts/landing_page/header/header.component";
export class LandingPage extends React.Component{
    constructor (){
        super()
    }
    render(){
        return(
            <div>
                <LandingHeader/>
            </div>
        )
    }
}