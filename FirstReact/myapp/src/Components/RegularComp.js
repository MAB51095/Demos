import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log("Rendering Regular Component")
        return (
            <div> 
                I am regular component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
