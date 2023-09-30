import React from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => scrollTo('#Home')}>Home</button>
                </li>
                <li>
                    <button onClick={() => scrollTo('#About')}>About</button>
                </li>
                <li>
                    <button onClick={() => scrollTo('#Projects', 'start')}>Projects</button>
                </li>
                <li>
                    <button onClick={() => scrollTo('#Contact')}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;