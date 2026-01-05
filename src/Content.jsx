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
            <div className="flex flex-col sm:flex-col items-start sm:items-center gap-10 align-right">
              <button onClick={generateName} className="px-3 py-1 bg-indigo-600 rounded-md">Generate Name</button>
              <p className="mb-2">Hello to: <span className="font-medium">{randomName}</span></p>
              <div className="text-sm text-gray-400">Random age from Chance: {chance.age()}</div>
            </div>
    )
}

export default Content