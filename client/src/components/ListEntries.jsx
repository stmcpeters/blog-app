import React, { useState } from 'react';
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
                user={users.find((user) => user.username === entry.author_username)}
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