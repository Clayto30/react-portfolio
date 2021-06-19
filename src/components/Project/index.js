import React from 'react';

const projects = [
    { 
        name: "Budget Tracker",
        description: "A budget tracker that works without a wifi connection!",
        // image
        url: "https://sleepy-sands-14482.herokuapp.com/"
    },
    {
        name: "Employee Tracker",
        description: "A node app that tracks employees, departments, and managers.",
        url: "https://sleepy-sands-14482.herokuapp.com/"
    },
    {
        name: "Weather Dashboard",
        description: "An informative weather app using API.",
        url: "https://clayto30.github.io/weather-dashboard/"

    },
    {
        name: "Family Financials",
        description: "A stock app created with an agile development team.",
        url: "https://familyfinancials.herokuapp.com/",
    },
    {
        name: "CountDown",
        description: "A fun, trivia quiz game with celebratory gifs when you succeed!",
        url: "https://htang2021.github.io/countDown/"
    },
    {
        name: "Mom's Website",
        description: "A silly site to impress my mom!",
        url: "https://clayto30.github.io/moms-website/"
    }
]
function Project() {
    return (
        <section>
            <h1>NAME</h1>
            <p>DESCRIPTION</p>
        </section>
    );
}
export default Project;