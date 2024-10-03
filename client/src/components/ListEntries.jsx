import React, { useEffect, useState } from 'react';
import Entry from './Entry';


const ListEntries = ({ entries, users }) => {

  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (id) => {
    setShowDetails(prevState => prevState === id ? null : id);
}

  return (
    <div className="list-entries">
      <h2>Latest Entries</h2>
      <ul>
          {entries.map((entry) => {
            return <li key={entry.id}>
              <Entry 
                entry={entry}
                users={users}
                toggleDetails={toggleDetails}
                showDetails={showDetails}
              />
            </li>
          })}
      </ul>
    </div>
  )
}

export default ListEntries;