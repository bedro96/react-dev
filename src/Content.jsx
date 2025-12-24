import React from 'react'
import { Chance } from 'chance';
import { useState } from 'react';

    


function Content() {
    const handleNameChange = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
    };
    const chance = new Chance();
    const [ chanceName, setChanceName ] = useState(null);
    
    return (
        <main>
            <p>This is the content section.</p>
            <p>Hello to: {handleNameChange()}</p>
            <p>Random name from Chance: {(chanceName===null)? setChanceName(chance.name()) : chanceName}</p>
            <p>Random age from Chance: {chance.age()}</p>

        </main>
    )
}

export default Content