import React from "react";
import { Link } from "react-router-dom";
import { BiLogoDiscord } from "react-icons/bi";
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
        Created by<br/>
        <span className="icon">
          <BiLogoDiscord />{" "}
        </span>
        skel101
      </span>
    </footer>
  );
}

export default Footer;
