import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';

function ContentContainer() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Project':
                return <Project />;
            case 'Resume':
                return <Resume />;
        }
    };

    return (
        <div>
            <NavTabs currentpage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage(currentPage)}</div>
        </div>
    )
}
export default ContentContainer;