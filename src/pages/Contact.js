import React from "react";
import Image1 from "../images/2.jpeg";
import "../styls/Contact.css";

function Contact() {
    return (
        <div className="contact">
        <div
            className="leftSide"
            style={{ backgroundImage: `url(${Image1})` }}
        ></div>
        <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="phone">Phone No</label>
            <input name="phone" placeholder="Enter phone no...." type="phone" />
            <label htmlFor="message">Message</label>
            <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            ></textarea>
            <button type="submit"> Submit </button>
        </form>
        </div>
    </div>
    );
}

export default Contact;