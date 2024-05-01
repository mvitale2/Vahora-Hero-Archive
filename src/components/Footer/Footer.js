import React from "react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
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
      <span>
        Website created by{" "}
        <span className="icon">
          <FaDiscord />
        </span>{" "}
        skel101 using React@18
      </span>
    </footer>
  );
}

export default Footer;
