// public/components/NavBar.js

import React from 'react';

const NavBar = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/creator">Creator</a></li>
        <li><a href="/join">Join Game</a></li>
        {isLoggedIn ? (
          <>
            <li><a href="/myaccount">My Account</a></li>
            <li><button>Log Out</button></li>
          </>
        ) : (
          <>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/login">Log In</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
