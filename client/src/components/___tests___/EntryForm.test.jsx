import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { userEvent } from "@testing-library/user-event";

import EntryForm from '../EntryForm'

  // tests display error with getByLabelText and value setter (input vs change)
  it('should show the value in the username input as Tester', () => {
    render(<EntryForm />)

    // screen.debug();
    // select username input box
    const usernameInput = screen.getByTestId('username');
    expect(usernameInput).toHaveValue('')
    // simulates user typing value into textbox
    fireEvent.change(usernameInput, {
      target: { value: 'Tester'},
    })
    // expect username textbox to have the value inputted
    expect(usernameInput).toHaveValue('Tester');
    // expect(screen.getByText("Tester")).toBeInTheDocument();
  })

  // test for empty username field
  test('should show error message when username is empty', () => {
    render(<EntryForm />);
    
    const usernameInput = screen.getByLabelText(/Username/);
    
    fireEvent.input(usernameInput, {
      target: { value: '' }
    });
    
    expect(screen.getByText('Please fill out all fields.')).toBeInTheDocument();
  });
  