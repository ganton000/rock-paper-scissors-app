import React from 'react';
import { Link } from "react-router-dom";

const Navbar= () => {
  return (
    <ul className='nav'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/ttt">Tic-Tac-Toe</Link>
      </li>
      <li>
        <Link to="/rps">Rock-Paper-Scissors</Link>
      </li>
      <li>
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li>
        <Link to="/test">Testing Stuff</Link>
      </li>
      <li>
        <Link to="/signup">Play now!</Link>
      </li>
    </ul>
  );
}
export default Navbar;
