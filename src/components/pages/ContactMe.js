import React from 'react';

function ContactMe() {
    return(
        <main>
            <h2>Contact Me</h2>
            <form ariaLabel="contact form">
                <label for="user-name">Your Name</label>
                <input type="text" id="user-name" autocomplete="name" required placeholder="Enter your name"/>
                <label for="user-email">Your Email</label>
                <input type="text" id="user-email" autocomplete="email" required placeholder="Enter an email address"/>
                <label for="user-message">Message</label>
                <input type="text" id="user-message" required placeholder="Type your message here"/>
                <button id="submit-btn">Submit</button>
            </form>
        </main>
    );
}

export default ContactMe;