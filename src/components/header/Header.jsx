import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h2>Rick and Morty</h2>   
      <Link to="/">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Header;
