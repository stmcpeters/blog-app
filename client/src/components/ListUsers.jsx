import React, { useEffect, useState } from 'react';
import User from './User';

const ListUsers = ({ users }) => {


  return (
    <div>
      <h2>Active Users</h2>
      <User users={users}/>
    </div>
  )
}

export default ListUsers;