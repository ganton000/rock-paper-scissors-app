import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
    <ul className='nav'>
    
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/game">Playnow</Link>
    </li>
    <li>
      <Link to="/test">Testing Stuff</Link>
      </li>
    <li>
      <Link to="/test">fasdasda</Link>
    </li>
  </ul>
  );
}
export default Navbar;
