import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Entry from '../Entry'

// displaying error user_since is undefined
describe('Entry component', () => {

  // mock entry data
  const entry = [
    {id: 1,
      title: "test", 
      content: "this is test content for a fake entry",
      author_username: 'Tester',
      created_at: '2024-10-04T02:09:30'
    }
  ]

  const user = [
    {id: 1,
      username: 'Tester',
      email: 'testing@mail.com',
      user_since: '1998-09-30T02:09:30'
    }
  ]
  render(<Entry entry={entry} user={user} />)
  screen.debug();
})