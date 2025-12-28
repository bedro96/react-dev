import React from 'react'
import { Chance } from 'chance';
import { useState } from 'react';


function Content() {
    const chance = new Chance();
    const [randomName, setRandomName] = useState(() => chance.name());

    const generateName = () => setRandomName(chance.name());

    return (
        <main className="bg-gray-800/50 rounded-md p-4 text-gray-200">
            <p className="mb-2">This is the content section.</p>
            <p className="mb-2">Hello to: <span className="font-medium">{randomName}</span></p>
            <div className="flex items-center gap-4">
              <button onClick={generateName} className="px-3 py-1 bg-indigo-600 rounded-md">Generate Name</button>
              <div className="text-sm text-gray-400">Random age from Chance: <span className="font-medium">{chance.age()}</span></div>
            </div>

        </main>
    )
}

export default Content