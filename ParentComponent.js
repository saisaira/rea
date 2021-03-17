import React, { Component } from 'react'
import Child from './ChildCompo';

class ParentComponent extends Component {
   constructor(props) {
       super(props)
       this.state = {
            parentname:'parent'
       }
    //  this.greetParent=this.greetParent.bind(this) 
   }
   greetParent(ram){
       document.querySelector("#ramhai").textContent="helloDeepu";
       alert(`Hello ${this.state.parentname} is ${ram.r}`)
   }
   
    render() {
        return (
            <div>
                <h2 id="ramhai"></h2>
                <Child greetHandler={()=>this.greetParent({sai:"hello",r:"sairam Garu"})} />
            </div>
        )
    }
}

export default ParentComponent
