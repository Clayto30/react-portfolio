import React from 'react';

function Footer() {
    return (
        <footer>
            <nav>
                <ul className="flex-row">
                    <li className="mx-1">
                        <a href="https://github.com/Clayto30">
                        <span>GitHub</span>
                        </a>
                    </li>
                    <li className='mx-1'>
                        <a href="https://www.linkedin.com/in/clayton-goff-8545b31b2/">
                            <span>LinkedIn</span>
                            </a>
                    </li>
                    <li className='mx-1'>
                        <span>Alternate Account</span>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;