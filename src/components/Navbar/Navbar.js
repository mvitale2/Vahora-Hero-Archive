import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <h1>Vahora Hero Archive</h1>
      </Link>
      <nav>
        <Link to="/" className="nav-link">
          Home |{" "}
        </Link>
        <Link to="/gallery" className="nav-link">
          Hero Gallery |{" "}
        </Link>
        <Link to="/about" className="nav-link">
          About Vahora
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
