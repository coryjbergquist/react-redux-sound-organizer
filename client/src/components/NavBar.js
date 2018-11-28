import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '6px',
  margin: '0 6px 6px',
  background: '',
  textDecoration: 'none',
  color: 'grey',
}

const NavBar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={ link }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={ link }
        to="/sounds"
      >
        Sounds
      </NavLink>
      <NavLink
        style={ link }
        to="/sounds/new"
      >
        Add Sound
      </NavLink>
    </div>
  );
}

export default NavBar;
