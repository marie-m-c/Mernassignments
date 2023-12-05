import React, { useState } from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    const [personAge, setPersonAge] = useState(age)
    return (
        <div>
            <h1> {lastName}, {firstName} </h1>
            <p>Age: {personAge} </p>
            <p>Hair Color: {hairColor} </p>
            <button onClick={ () => setPersonAge(personAge + 1)}>Birthday Button for {firstName} {lastName} </button>
        </div>
    );
}

export default PersonCard