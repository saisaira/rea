import React from 'react'

function ChildCompo(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}

export default ChildCompo;
