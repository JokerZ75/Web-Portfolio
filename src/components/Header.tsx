import React, { ReactNode } from "react";
import Nav from "./Navbar";

const Header: React.FC = () => {
    return (
        <header>
            <div>
                <h1 id="header-text">Web Portfolio</h1>
            </div>
            <Nav />
        </header>
    );
};

export default Header;