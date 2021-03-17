import React from 'react'

function Person({person}) {
    return (
        <h1>
my rollno {person.id} and name is {person.name} and salary is {person.salary}
{console.log(person.id)}
</h1>
        
    )
}

export default Person;
