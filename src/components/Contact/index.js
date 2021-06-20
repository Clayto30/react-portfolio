import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const { name, email, message } = formState;

function Contact() {
    const [formState, setFormState] = useState();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    return (
        <div>
            <h2>Contact:</h2>
            return (
  <section>
    <h1>Contact me</h1>
    <form id="contact-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="5" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
  );
        </div>
    );
}

export default Contact;