import React, { useState } from 'react';

function ContactMe() {
    const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    //Function for handling form submission
    const handleSubmit = (e) => {
        //e.preventDefault;


    }

    const nameCheck = (e) => {

    }

    function emailCheck () {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValid = re.test(String(this.value()).toLowerCase());

        if(!emailValid) setErrorMessage('Make sure you enter a valid email.');
    }

    const messageCheck = (e) => {
        
    }

    return(
        <main>
            <h2>Contact Me</h2>
            <form ariaLabel="contact form" onSubmit={handleSubmit}>
                <label for="user-name">Your Name</label>
                <input type="text" id="user-name" autocomplete="name" required placeholder="Enter your name" onChange={nameCheck}/>
                <label for="user-email">Your Email</label>
                <input type="text" id="user-email" autocomplete="email" required placeholder="Enter an email address" onChange={(emailCheck)}/>
                <label for="user-message">Message</label>
                <input type="text" id="user-message" required placeholder="Type your message here" onChange={messageCheck}/>
                <button id="submit-btn">Submit</button>
            </form>
            <p className="error-text">{errorMessage}</p>
        </main>
    );
}

export default ContactMe;