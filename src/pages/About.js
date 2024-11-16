import React from "react";
import Image from '../images/about.jpg';
import "../styls/About.css";
function About() {
    return (
        <div className="about">
            
        <div className="aboutTop"  style={{ backgroundImage: `url(${Image})`}}></div>
        <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
        At Burger House, our passion for creating the ultimate burger experience is evident in every bite of our acclaimed masterpiece, 
        "The Juicy Deluxe." We believe that an exceptional burger starts with top-quality ingredients, 
        which is why we meticulously source our prime beef locally, ensuring its tenderness and unmatched flavor. 
        Our expert chefs handcraft each burger with precision, taking care to grill the patty to perfection and infuse it with our secret blend of herbs and spices,
        making it the juiciest and most flavorful burger you'll ever taste. </p>
        <p>But it doesn't stop there. We know that a truly extraordinary burger is a work of art, 
        and that's why "The Juicy Deluxe" boasts a tantalizing combination of fresh toppings and condiments. 
        The vibrant crunch of crisp lettuce, the burst of flavor from ripe tomatoes, 
        the tangy touch of our signature sauce – every element complements one another, creating a harmonious symphony of taste.</p>
        
        <p>Not only is "The Juicy Deluxe" an extraordinary delight, but it's also a burger designed to cater to your individual preferences. 
        From the classic preparation that captures the essence of timeless burger tradition to a fully customizable option where you can add your favorite toppings, 
        we ensure that every burger lover finds their perfect match.</p>
        <p>At Burger House, we believe that a burger is more than just a meal; it's an experience. 
        As you savor "The Juicy Deluxe" with each bite, you embark on a culinary journey that tantalizes your senses and leaves a lasting impression. 
        Paired with our hand-cut fries and a refreshing beverage, your dining experience is elevated to a new level of satisfaction.</p>
        <p>Whether you're dining with family, friends, or on your own, we invite you to savor the unparalleled excellence of "The Juicy Deluxe." 
        It's a burger experience like no other, created with love and dedication to delight burger enthusiasts and elevate your dining moments.</p>
        </div>
        </div>
    );
}

export default About;