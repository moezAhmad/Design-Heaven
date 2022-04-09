import React from "react";
import "../../../App.scss"
import { CardList } from "../../../components/card-list/card-list.component";
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";




export class PastDesigns extends React.Component {
    constructor() {
        super();
    
        this.state = {
    
          designs: []
        };
      }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(d=>this.setState({designs:d}))
        
      }
    render() {
        return (
            <div className="landing__past_designs">
                <HeadingSecondary text="Past Winning Designs" modifier = "white"/>
                <CardList designs={this.state.designs}/>
            </div>

        )
    }
}