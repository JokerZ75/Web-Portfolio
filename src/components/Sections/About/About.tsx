import React from "react";
import Skill from "./Skill";
import Scroller from "./Scroller";

const About: React.FC = () => {
  return (
    <section id="About">
      <div id="about-container">
        <Scroller>
          <Skill name="React" />
          <Skill name="TypeScript" />
          <Skill name="JavaScript" />
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="Node.js" />
          <Skill name="Express" />
          <Skill name="MongoDB" />
          <Skill name="SQL" />
          <Skill name="Git" />
        </Scroller>
        <div className="about-text">
          <p>
            I'm a Software Engineering Student studying at Sheffield Hallam
            University. I have a passion for web development and have been
            working on a few projects in my spare time. I am currently looking
            for a placement year in the Software Engineering industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
