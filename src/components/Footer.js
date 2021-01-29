import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
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
      <p>© GHAN LLC -  ALL RIGHTS RESERVED</p>
    </>
  );
}

export default Footer;


