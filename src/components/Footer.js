import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <Link to="">
            <FacebookIcon />
          </Link>
        </div>
        <div className="footerNav">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
      </div>
      <div className="footerBottom">
          <p>
            Copyright &copy; <span className="design">RebelyaFood</span>{" "}
          </p>
        </div>
    </footer>
  );
}

export default Footer;
