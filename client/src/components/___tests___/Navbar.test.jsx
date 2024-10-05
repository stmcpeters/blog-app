import { describe, it } from 'vitest';
import {render, screen} from '@testing-library/react'
import MyNavbar from '../Navbar.jsx';


describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(<MyNavbar />)
    screen.debug();
  })

  it('makes sure the site name is displayed in the navbar', () => {
    render(<MyNavbar />)
    expect(screen.getByText('Pawesome Pets')).toBeInTheDocument();
  })
})
