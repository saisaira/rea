import React from 'react'
import Person from './Person';

function nameList() {
    const details=[
        {
            id:1,
            name:"sairam D",
            salary:20000
        },
        {
            id:2,
            name:"Tarak D",
            salary:45000
        },
        {
            id:3,
            name:"Gauthami D",
            salary:80000
        }

    ]
    const personDetails=details.map(person=>
        <Person person={person}/>
    )
    return (
        <div>
{personDetails}
        </div>
    )
}

export default nameList
