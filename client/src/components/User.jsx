import Card from 'react-bootstrap/Card';
import React from 'react';


const User = ({ users }) => {

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Active Users</Card.Title>
          <ul>
            {users.map((user) => {
              return <li key={user.id}>
                {user.username}
              </li>
            })}
          </ul>
        </Card.Body>
      </Card>
    </>
  )
}

export default User;