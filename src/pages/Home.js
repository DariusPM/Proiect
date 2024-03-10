import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/1.jpg";
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`
    }}>
      <div className="headerContainer" >
        <h1>Rebelya Food</h1>
        <p>Fii tânăr, distrează-te, gustă mâncare.</p>
        <Link to = '/menu' >
          <button>Meniul Zilei</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
