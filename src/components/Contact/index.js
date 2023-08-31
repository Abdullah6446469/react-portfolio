import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@email/browser';  
import { useRef } from 'react';
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeout); // Cleanup the timeout on unmount
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'survice_6446469', 'template_sbhvllq', form.current, '9Q5VEJ4i8Po8Bn57w'      
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
      (error) => {
        console.error('Error sending email:', error);
        alert('Failed to send the message, please try again');
      });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <label>Name</label>
                  <input placeholder="Name" type="text" name="form_name" required />
                </li>
                <li className="half">
                  <label>Email</label>
                  <input placeholder="Email" type="email" name="form_email" required />
                </li>
                <li>
                  <label>Subject</label>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <label>Message</label>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          {/* Rest of the info and map content */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
