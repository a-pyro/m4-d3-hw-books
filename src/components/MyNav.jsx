import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function MyNav({ title }) {
  return (
    <Navbar sticky='top' bg='dark' expand='sm'>
      <Navbar.Brand className='font-weight-bold text-white' href='#home'>
        {title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='text-white' href='#home'>
            Home
          </Nav.Link>
          <Nav.Link className='text-white' href='#link'>
            About
          </Nav.Link>
          <Nav.Link className='text-white' href='#link'>
            Browse
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
