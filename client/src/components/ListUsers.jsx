import React, { useEffect, useState } from 'react';
import User from './User';

const ListUsers = ({ users }) => {


  return (
    <div>
      <User users={users}/>
    </div>
  )
}

export default ListUsers;