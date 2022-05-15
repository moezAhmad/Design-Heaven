import React from "react";
import "../../App.scss"
import { HeadingSecondary } from "../../components/heading-secondary/heading-secondary.component";
import { LongCardList } from "../../components/long_card-list/long_card-list.component";
const competitions = [
    {
        mainLogo:"https://robohash.org/asd",
        title:"Design Competition",
        types:["Logo Design","Mockups"],
        client:"Moez Ahmad",
        details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
        hours:"13",
        entries:"10",        
    },
    {
        mainLogo:"https://robohash.org/asd",
        title:"Design Competition",
        types:["Logo Design","Mockups"],
        client:"Moez Ahmad",
        details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
        hours:"13",
        entries:"10",        
    },
    {
        mainLogo:"https://robohash.org/asd",
        title:"Design Competition",
        types:["Logo Design","Mockups"],
        client:"Moez Ahmad",
        details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
        hours:"13",
        entries:"10",        
    },    
]

export class CompetitionContainer extends React.Component{

    render(){
        return(
            <div className="competitions__container">
                <HeadingSecondary text="New Competitions" font_modifier="2" color_modifier = "black" position="testimonials-past-format"/>
                <LongCardList competitions={competitions}/>
            </div>
        )
    }
}