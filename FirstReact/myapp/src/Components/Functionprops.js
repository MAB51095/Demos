import React from 'react'

export default function Functionprops(properties) {
    console.log({properties})
    return (
       
        <div>
            <h3>this is a fucntional props component</h3>
<h3>Hello {properties.name} from {properties.place}</h3>
        </div>
    )
}
