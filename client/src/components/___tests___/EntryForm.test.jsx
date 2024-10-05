import * as React from 'react'
import { render, screen, getByLabelText } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import EntryForm from '../EntryForm'

describe('the form to create a new entry', ()=> {
  it('should show the text content in the username input as Tester', () => {
    render(<EntryForm />)

    // select the entry username input box
    const usernameInput = screen.getByLabelText(/Username/);
    // simulate the user typing into the field
    userEvent.type(usernameInput, 'Tester')
    // checking if the usernameInput field has the value of Tester
    expect(usernameInput).toHaveValue('Tester');
  })
})