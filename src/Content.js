import React from 'react'

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
        </main>
    )
}

export default Content