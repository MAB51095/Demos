import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Rendering Pure Component")
        return (
            <div>
                this is pure components {this.props.name}
            </div>
        )
    }
}

export default PureComp
