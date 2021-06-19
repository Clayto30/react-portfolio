import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    Clayton Goff
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-1">
                        <span>Portfolio</span>
                    </li>
                    <li className='mx-1'>
                        <span>Resume</span>
                    </li>
                    <li className='mx-1'>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;