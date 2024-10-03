import React, { useEffect, useState } from 'react';
import User from './User';

const ListUsers = () => {

  const [users, setUsers] = useState([])

  const loadUsers = () => {
    fetch("http://localhost:5001/api/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }

  useEffect(() => {
    loadUsers();
  }, [users]);


  return (
    <div>
      <h2>Online Users</h2>
      <User users={users}/>
    </div>
  )
}

export default ListUsers;