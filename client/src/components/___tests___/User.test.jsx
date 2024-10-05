import * as React from 'react'
import { render, screen } from '@testing-library/react'

import User from '../User'

describe('User', () => {
  it('renders the users correctly', () => {
    // creates mock user data to display
    const users = [
      {id: 1, username: 'Bob'},
      {id: 2, username: 'John'}
    ]
    // renders User component with mock user data passed into it
    render(<User users={users}/>);
    // will display body
    screen.debug();
    // checks if user Bob is rendered on the page
    expect(screen.getByText('Bob')).toBeInTheDocument();
  })
})