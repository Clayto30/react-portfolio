import React from 'react';

function NavTabs(props) {
    const tabs = ['About', 'Project', 'Contact', 'Resume'];
    return (
        <ul classname="nav nav-tabs">
            {tabs.map(tab => (
                <a href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
                >
                    {tab}
                </a>
            ))}
        </ul>
    );
}

export default NavTabs;