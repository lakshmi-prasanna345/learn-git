import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return <h1>welcome to the class component</h1>
        {this.props.children}
    }
}

export default Welcome