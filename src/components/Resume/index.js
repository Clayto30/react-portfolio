import React from 'react';

function Resume() {
    return (
        <div>
            <h2>Resumé:</h2>
            <a href="./assets/resume.docx" download>
                <p>
                    Click to Download!
                </p>
            </a>
            <h2>Proficiencies:</h2>
            <ul>
                <li>
                    HTML and CSS
                </li>
                <li>
                    JavaScript and JQuery
                </li>
                <li>
                    Node packages including Express
                </li>
                <li>
                    Databases including SQL, NoSQL, MongoDB, and GraphQL
                </li>
                <li>
                    Latest work: React!
                </li>
            </ul>
        </div>
    );
}

export default Resume;