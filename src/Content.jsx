import { useState, useEffect } from 'react'
import { Chance } from 'chance';
import { DateTime } from 'luxon';


function useNow(intervalMs = 1000, zone) {
  const [now, setNow] = useState(() =>
    zone ? DateTime.now().setZone(zone) : DateTime.now()
  );

  useEffect(() => {
    const id = setInterval(() => {
      setNow(zone ? DateTime.now().setZone(zone) : DateTime.now());
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, zone]);

  return now; // DateTime 객체 반환
}

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