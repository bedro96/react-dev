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
    const [ chanceName, setChanceName ] = useState(() => chance.name());
    const now = useNow();

    const handleNameChange = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
    };
    
    return (
        <main>
            <p>This is the content section.</p>
            <p>Hello to: {handleNameChange()}. This value should change on every render.</p>
            <p>Random name from Chance: {chanceName}</p>
            <p>Random age from Chance: {chance.age()}</p>
            <p>Now: {now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}</p>
            
        </main>
    )
}

export default Content