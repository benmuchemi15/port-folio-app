import React from 'react';

function Nav(props) {

    const {linksOne, linksWork} = props;

    return (
        <header>
            <h2>Benson Muchemi</h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#About"> About Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#Porfolio"> Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a href="#Contact"> Contact</a>
                    </li>
                    <li className="mx-2">
                        <a href="#Resume"> Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;