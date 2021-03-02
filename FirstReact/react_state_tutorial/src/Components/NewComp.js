import React, { Component } from 'react'
import BellSubscribe from '../img/BellSubscribe.jpg'
import BellSubscribed from '../img/BellSubscribed.jpg'
export class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Subscribe to Simplilearn",
             sub : "Subscribe",
             bellVisible : "none",
             bellUrl : BellSubscribe
        }
    }
    styles={
        fontStyle: "italic",
        color: "purple"
      };

    ButtonChange=()=>{
        this.setState({sub : "Subscribed", message : "Hit the bell icon to never miss an update",bellVisible : "inline"})
    }

    BellClick=()=>{
        this.setState({ 
            bellUrl : BellSubscribed,
            message : "Thank you!!"
        })
    }

    render() {
        const {message,sub,bellUrl,bellVisible} = this.state;
    
        return (
            <div>
                <h3 style={this.styles}>{message}</h3>
                <button onClick={this.ButtonChange}>{sub}</button>
                <br></br>
                <img style={{width:"30px",height:"40px",display:bellVisible}} src={bellUrl} onClick={this.BellClick} display={bellVisible}></img>
            </div>
        )
    }
}

export default NewComp
