import React from "react";

function MenuItem({ image, name, price }) {
    return (
        <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> Rs {price} /- </p>
        <button> Add To Cart </button>
        </div>
    );
}

export default MenuItem;