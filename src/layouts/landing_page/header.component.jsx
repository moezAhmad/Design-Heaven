import React from "react";
import { Navbar } from "../../components/navbar/navbar.component";
import { TextBox } from "../../components/textbox/TextBox.component";
import "../../App.scss"

export const LandingHeader = ()=>{
    return(
        <div className="landing__header">
            <Navbar/>
            <TextBox/>
        </div>
    )
}