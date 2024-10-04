import { describe, it } from 'vitest';
import {render, screen} from '@testing-library/react'
import MyNavbar from './Navbar.jsx';


describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(<MyNavbar />)
    screen.debug();
  })
})
