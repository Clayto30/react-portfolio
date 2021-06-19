import React from 'react';

function Contact() {
    return (
        <div>
            <h2>Contact:</h2>
            <form>
                <label for="name">Name:</label>
                <br />
                <input type="email"></input>
                <br />
                <label for="lastName">Email Adddress</label>
                <br />
                <input type="text"></input>
                <br />
                <label for="lastName">Message:</label>
                <br />
                <input type="text"></input>
                <br />
            </form>
        </div>
    );
}

export default Contact;