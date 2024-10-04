import { describe, it, expect } from 'vitest';
import {render, screen} from '@testing-library/react'

// // describe statement is called a test suite
// describe('a truthy statement', () => {
//   // it statement is called a test case === can also use test keyword
//   it('should be equal to 2', () => {
//     // expect statement is an assertion
//     expect (1+1).toEqual(2);
//   })
// })

import MyNavbar from './src/components/NavBar';

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(<MyNavbar />)
    screen.debug();
  })
})