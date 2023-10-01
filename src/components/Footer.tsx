import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
        <p className="code-font heading">Deacon Hughes Dev</p>
        <p>Built using Gatsby as another opportunity to learn something new.</p>
        <p>© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;