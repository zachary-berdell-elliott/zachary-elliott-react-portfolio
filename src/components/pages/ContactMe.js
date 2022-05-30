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
    const handleSubmit = (e) => {
        e.preventDefault();
        var submitable = true;

        if(!fieldEngaged.emailEngaged) {
            setErrorMessages({
                ...errorMessages,
                emailError: 'You can not submit this form until you have entered your email.'
            });
            submitable = false;
        } else if(errorMessages.emailError !== '') {
            submitable = false;
        }

        if(!fieldEngaged.nameEngaged) {
            setErrorMessages({
                ...errorMessages,
                nameError: 'You can not submit this form with out entering a name.'
            });
            submitable = false;
        } else if(errorMessages.nameError !== '') {
            submitable = false;
        }

        if(!fieldEngaged.messageEngaged) {
            setErrorMessages({
                ...errorMessages,
                messageError: 'You need to enter a message about what you are contacting for in order to submit this form.'
            });
            submitable = false;
        } else if(errorMessages.messageError !== '') {
            submitable = false;
        }

        if(submitable) {
            setFeedback('Your response has been recorded. I will get back to you when possible.');
        } else {
            setFeedback('You appear to have made a mistake when filling out the form. please review in order to find what your mistake is.');
        }
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
        !e.target.value.length ? setErrorMessages({
            ...errorMessages,
            nameError: 'Please enter your name here'
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
                <div className="required">{errorMessages.nameError}</div>
                <label htmlFor="user-email">Your Email <span className="required">*</span></label>
                <input type="text" id="user-email" autoComplete="email" required placeholder="Enter an email address"  onBlur={emailCheck} />
                <div className="required">{errorMessages.emailError}</div>
                <label htmlFor="user-message">Message <span className="required">*</span></label>
                <textarea id="user-message" required placeholder="Type your message here" onBlur={messageCheck}/>
                <div className="required">{errorMessages.messageError}</div>
                <button id="submit-btn">Submit</button>
            </form>
            <p className="feedback-text">{feedback}</p>
        </main>
    );
}

export default ContactMe;