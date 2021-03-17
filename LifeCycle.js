import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sairam"
        }
        console.log('Lifecycle components');
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle GetDerived state');
        return null;
    }
    componentDidMount(){
        console.log("lifecycle Did");
    }
    render() {
        console.log("Life cycle render");
        return (
            <div>
               <h1>Life cycle A</h1> 
            </div>
        )
    }
}

export default LifeCycle;
