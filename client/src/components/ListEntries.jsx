import React, { useEffect, useState } from 'react';
import Entry from './Entry';


const ListEntries = () => {

  // original state of array of all entries
  const [entries, setEntries] = useState([]);

  // function to fetch all entries
  const loadEntries = () => {
    fetch("http://localhost:5001/api/entries")
      .then((response) => response.json())
      .then((entries) => {
        setEntries(entries);
      });
  }

  // reloads entries everytime entries change
  useEffect(() => {
    loadEntries();
  }, [entries]);

  return (
    <div className="list-entries">
      <h2>Entries</h2>
      <ul>
          {entries.map((entry) => {
            return <li key={entry.id}>
              <Entry 
                entry={entry}
              />
            </li>
          })}
      </ul>
    </div>
  )
}

export default ListEntries;