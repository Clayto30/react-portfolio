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
      </div>
        </section>
    );
}

export default About;