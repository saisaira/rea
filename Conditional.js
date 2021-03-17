import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        if (this.state.isLoggedIn) {
            return(<><h1>Hello Gauthami</h1></>)
        }else{
            return(<h1>Hai Rishabh</h1>)
        }
    }
}

export default Conditional
