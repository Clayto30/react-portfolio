import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <footer>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Clayton Goff</Navbar.Brand>
                <Nav className="mr-auto">
                    
                        <Nav.Link a href="https://github.com/Clayto30">
                        GitHub
                        </Nav.Link>
                        <Nav.Link a href="https://www.linkedin.com/in/clayton-goff-8545b31b2/">
                            LinkedIn
                        </Nav.Link>
                        <Nav.Link a href="/about">
                        Another Account
                        </Nav.Link>
                    
                </Nav>
            </Navbar>
        </footer>
    );
}

export default Footer;