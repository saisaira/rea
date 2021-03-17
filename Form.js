import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:''
        }
    }
    UsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    CommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments}`)
        event.preventDefault();
    }
    
    render() {
        const {username,comments}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
             <div>
                <label>Username</label>
                <input type="text" value={this.state.username}
                 onChange={this.UsernameChange}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.CommentsChange}></textarea>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
            
        )
    }
}

export default Form;
