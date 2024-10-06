import * as React from 'react'
import { render, screen } from '@testing-library/react'

import ListUsers from '../ListUsers'

test('lists users correctly', () =>{
  // creates mock user data to list
  const users = [
    {id: 1, username: 'Bob', email: 'bob@gmail.com', user_since: '2024-10-04T02:09:30'},
    {id: 2, username: 'John', email: 'john@gmail.com', user_since: '2024-02-02T02:09:30'}
  ]

  render(<ListUsers users={users} />)
  expect(screen.getByText('John')).toBeInTheDocument();
  screen.debug();
})