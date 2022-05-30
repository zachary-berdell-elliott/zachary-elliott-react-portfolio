import React, { useState } from 'react';

function ContactMe() {
    const [errorMessages, setErrorMessages] = useState({
        nameError: '',
        emailError: '',
        messageError: ''
    });

    const [fieldEngaged, setFieldEngaged] = useState({
        nameEngaged: false,
        emailEngaged: false,
        massageEngaged: false
    });

    const [feedback, setFeedback] = useState('');

    //Function for handling form submission
    const handleSubmit = (event) => {
        //e.preventDefault;


    }

    const messageCheck = (e) => {
        !e.target.value.length ? setErrorMessages({
            ...errorMessages,
            messageError: 'You must enter a message in order to proceed.'
        }) : setErrorMessages({
            ...errorMessages,
            messageError: ''
        });

        setFieldEngaged({
            ...fieldEngaged,
            messageEngaged: true
        });
    }

    const emailCheck = (e) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValid = re.test(String(e.target.value).toLowerCase());

        if (!e.target.value.length) {
            setErrorMessages({
                ...errorMessages,
                emailError: 'Your email is required.'
            });
        } else if (!emailValid) {
            setErrorMessages({
                ...errorMessages,
                emailError: 'You did not enter a valid email.'
            });
        } else {
            setErrorMessages({
                ...errorMessages,
                emailError: ''
            });
        }

        setFieldEngaged({
            ...fieldEngaged,
            emailEngaged: true
        });
    }

    const nameCheck = (e) => {
        !e.target.length ? setErrorMessages({
            ...errorMessages,
            nameError: 'Please eneter a name to submit this form.'
        }) : setErrorMessages({
            ...errorMessages,
            nameError: ''
        });

        setFieldEngaged({
            ...fieldEngaged,
            nameEngaged: true
        });
    }
    
    return(
        <main>
            <h2>Contact Me</h2>
            <form aria-label="contact form" onSubmit={handleSubmit} id="contact-form">
                <label htmlFor="user-name">Your Name <span className="required">*</span></label>
                <input type="text" id="user-name" autoComplete="name" required placeholder="Enter your name" onBlur={nameCheck}/>

                <label htmlFor="user-email">Your Email <span className="required">*</span></label>
                <input type="text" id="user-email" autoComplete="email" required placeholder="Enter an email address"  onBlur={emailCheck} />
                <label htmlFor="user-message">Message <span className="required">*</span></label>
                <textarea id="user-message" required placeholder="Type your message here" onBlur={messageCheck}/>
                <button id="submit-btn">Submit</button>
            </form>
            <p className="feedback-text">{feedback}</p>
        </main>
    );
}

export default ContactMe;