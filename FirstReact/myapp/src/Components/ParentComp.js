import React, { Component } from 'react' 
import RegularComp from './RegularComp'
import PureComp from './PureComp'

export class ParentComp extends Component {
    
    constructor(props){
        super(props);
    
        this.state = {  name: 'Simplilearn' }
    };

   componentDidMount(){
       setInterval(()=> {
           this.setState({name:'Simplilearn'})
       },3000)
   }


    render(){
        return (
            <div> 
                I am parent component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
