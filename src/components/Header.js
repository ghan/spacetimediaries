import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1><Link to="/">Spacetime Diaries</Link></h1>
      <ul>
        <li>
          <Link to="/listen">Listen</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;


