import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="Navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <DehazeIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
