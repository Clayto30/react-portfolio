import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;

    const handleChange = (e) => {
        setFormState({ ...formState, name: e.target.value })

    };

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={formState.name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={formState.email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={formState.message} rows="5" onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;