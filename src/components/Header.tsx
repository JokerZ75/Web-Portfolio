import React, { ReactNode } from "react";
import Nav from "./Navbar";
// @ts-expect-error
import CV from "../public/static/Deacon-Hughes-CV.pdf";

const Header: React.FC = () => {
    return (
        <header>
            <div>
                <h1 id="header-text">Deacon Hughes</h1>
            </div>
            <div>
                <a href={CV} target="_blank" id="cv" rel="noreferrer">
                    Download CV
                </a>
            </div>
            <Nav />
        </header>
    );
};

export default Header;