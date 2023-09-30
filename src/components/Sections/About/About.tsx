import React from "react";
import Skill from "./Skill";
import Scroller from "./Scroller";

const About: React.FC = () => {
  return (
    <section id="About">
      <div id="about-container">
        <div>
          <div>
            <h3 className="code-font heading">Skills</h3>
          </div>
          <Scroller>
            <Skill name="C#" />
            <Skill name="MongoDB" />
            <Skill name="Express" />
            <Skill name="React.js" />
            <Skill name="Node.js" />
            <Skill name="Next.js" />
            <Skill name="TypeScript" />
            <Skill name="JavaScript" />
            <Skill name="HTML" />
            <Skill name="CSS" />
            <Skill name="TailwindCSS" />
            <Skill name="SASS" />
            <Skill name="PHP" />
            <Skill name="SQL" />
            <Skill name="Git" />
          </Scroller>
        </div>
        <div>
          <h2 className="code-font heading">About Me</h2>
        </div>
        <div className="about-text">
          <ul>
            <li>
              Doncaster native. Where I've learned the values of
              <span className="highlight"> hard work and resilience</span> that
              I carry with me in all aspects of life.
            </li>
            <li>
              I'm currently on the path to becoming a software engineer at
              Sheffield Hallam University.{" "}
              <span className="highlight">
                I'm currently looking for my placement job for year 3.
              </span>
            </li>
            <li>
              While <span className="highlight">coding is my main gig</span>, I
              do have more to offer. I'm a
              <span className="highlight"> passionate gamer</span>, always up
              for a session. Plus, I'm the
              <span className="highlight"> bassist in a local band</span>,
              bringing the groove to our tunes. These hobbies keep me balanced
              and add some excitement to the mix.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
