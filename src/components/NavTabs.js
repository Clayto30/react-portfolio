import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavTabs(props) {
    const tabs = ['About', 'Project', 'Contact', 'Resume'];
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Clayton Goff</Navbar.Brand>
                <Nav className="mr-auto">
                    {tabs.map(tab => (
                        <Nav.Link a href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </header>
    );
}

export default NavTabs;