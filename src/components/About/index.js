import React from 'react';
import profileImage from '../../assets/images/about.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <div className="flex-row">
          <img
            src={profileImage}
            alt="Clayton Goff"
            className="img-thumbnail mx-1"
          />
      </div>
        </section>
    );
}

export default About;