import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
const projects = [
    {
        name: "Budget Tracker",
        description: "A budget tracker that works without a wifi connection!",
        // image
        url: "https://sleepy-sands-14482.herokuapp.com/",
        projectImage: "./assets/images/budget.jpg"
    },
    {
        name: "Employee Tracker",
        description: "A node app that tracks employees, departments, and managers.",
        url: "https://sleepy-sands-14482.herokuapp.com/",
        projectImage: "./assets/images/employee.jpg"

    },
    {
        name: "Weather Dashboard",
        description: "An informative weather app using API.",
        url: "https://clayto30.github.io/weather-dashboard/",
        projectImage: "./assets/images/weather.jpg"


    },
    {
        name: "Family Financials",
        description: "A stock app created with an agile development team.",
        url: "https://familyfinancials.herokuapp.com/",
        projectImage: "./assets/images/famfin.png"

    },
    {
        name: "CountDown",
        description: "A fun, trivia quiz game with celebratory gifs when you succeed!",
        url: "https://htang2021.github.io/countDown/",
        projectImage: "./assets/images/countdown.jpg"

    },
    {
        name: "Mom's Website",
        description: "A silly site to impress my mom!",
        url: "https://clayto30.github.io/moms-website/"
    }
]
function Project() {
    return (

        <Row xs={1} md={2} className="g-4">
            {projects.map((projects, i) =>
            (
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={projects.projectImage} />
                        <Card.Body>
                            <Card.Title>{projects.name}</Card.Title>
                            <Card.Text>
                                {projects.description}
                            </Card.Text>
                            <Card.Link href={projects.url}>{projects.name}</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
            ))}
        </Row>
    );
}
export default Project;