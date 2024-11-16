import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/Background1.jpg";
import "../styls/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
            <h1> Burger House </h1>
            <p> Home of the belly buster burgers </p>
            <Link to="/menu">
                <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
);
}
export default Home;
