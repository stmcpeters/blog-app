import * as React from 'react'
import { render, screen } from '@testing-library/react'

import ListEntries from '../ListEntries'

it('should list entries correctly', () => {

  const users = [
    {id: 1, username: 'Bob', email: 'bob@gmail.com', user_since: '2024-10-04T02:09:30'},
    {id: 2, username: 'John', email: 'john@gmail.com', user_since: '2024-02-02T02:09:30'}
  ]
  const entries = [
    {id: 1,
      title: "test", 
      content: "this is test content for a fake entry",
      author_username: 'Bob',
      created_at: '2024-10-04T02:09:30'
    },
    {id: 2,
      title: "test two", 
      content: "this is another test content for a fake entry",
      author_username: 'John',
      created_at: '2024-10-04T02:09:30'
    }
  ]

  render(<ListEntries entries={entries} users={users} />)
  
  screen.debug();
})