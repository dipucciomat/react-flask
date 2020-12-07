import React,{Component} from 'react';


export default class Questions extends Component {
    render(){
        return(
            <div>{this.props.q} {this.props.a}</div>
            
        )
    }
}