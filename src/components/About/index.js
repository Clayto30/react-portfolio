import React from 'react';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <div className="flex-row">
          <img
            src="./assets/images/about.jpg"
            alt="Clayton Goff"
            className="img-thumbnail mx-1"
          />
          <p>Clayton is a full-stack developer seeking to contribute to a web app! He has developed and demonstrated familiarity with the full-stack and working in agile work groups in the UC Berkeley Coding Bootcamp (Jan-July 2021).</p>
      </div>
        </section>
    );
}

export default About;