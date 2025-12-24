import React from 'react'
import { Chance } from 'chance';

const chance = new Chance();

function Content() {
    const handleNameChange = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
    };
     
    return (
        <main>
            <p>This is the content section.</p>
            <p>Hello to: {handleNameChange()}</p>
            <p>Random name from Chance: {chance.name()}</p>
            <p>Random age from Chance: {chance.age()}</p>
            
        </main>
    )
}

export default Content