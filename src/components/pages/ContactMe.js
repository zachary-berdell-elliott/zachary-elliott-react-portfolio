import React, { useState } from 'react';

function ContactMe() {
    const [email, setEmail] = useState('Your Email');
  const [name, setName] = useState('Your Name');
  const [message, setMessage] = useState('Message');
  const [errorMessage, setErrorMessage] = useState('');

    //Function for handling form submission
    const handleSubmit = (e) => {
        //e.preventDefault;


    }

    const nameCheck = (e) => {
        e.preventDefault();
        (e.target.value.length) ? setName('Your Name') : setName('Your name is required');
    }

    const emailValid = (e) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValid = re.test(String(e.target.value).toLowerCase());

        !emailValid ? setErrorMessage('Make sure you enter a valid email.') : setErrorMessage('');
    }

    const messageCheck = (e) => {
        e.preventDefault();
        e.target.value.length ? setMessage('Message') : setMessage('A message is required');
    }

    const emailCheck = (e) => {
        e.preventDefault();
        e.target.value.length ? setEmail('Your Email') : setEmail('Your email is required');
    }

    return(
        <main>
            <h2>Contact Me</h2>
            <form aria-label="contact form" onSubmit={handleSubmit}>
                <label htmlFor="user-name">{name}</label>
                <input type="text" id="user-name" autoComplete="name" required placeholder="Enter your name" onBlur={nameCheck}/>
                <label htmlFor="user-email">{email}</label>
                <input type="text" id="user-email" autoComplete="email" required placeholder="Enter an email address"  onBlur={emailCheck} onChange={emailValid}/>
                <label htmlFor="user-message">{message}</label>
                <input type="text" id="user-message" required placeholder="Type your message here" onBlur={messageCheck}/>
                <button id="submit-btn">Submit</button>
            </form>
            <p className="error-text">{errorMessage}</p>
        </main>
    );
}

export default ContactMe;