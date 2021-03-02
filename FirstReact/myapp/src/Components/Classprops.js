import React, { Component } from 'react'

export class Classprops extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} from {this.props.place}</h1>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default Classprops
