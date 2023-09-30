import React from "react";
import Card from "./Project-Card";

const Projects: React.FC = () => {
  return (
    <section id="Projects">
      <div>
        <h2 className="code-font heading">Projects</h2>
      </div>
      <div id="project-cards">
        <Card
          image="https://i.imgur.com/5QZQ9Xo.png"
          title="Web Portfolio"
          description="This website! A portfolio to showcase my skills and projects."
          skills={["React.js", "TypeScript", "SASS", "Gatsby"]}
          liveDemo="https://deaconhughesdev.com"
            gitHub="https"
        />
        <Card
          image="https://i.imgur.com/2uJqXzB.png"
          title="Deacon Hughes Dev"
          description="My first portfolio website. A simple website to showcase my skills and projects."
          skills={["HTML", "CSS", "JavaScript", "PHP"]}
        />
        <Card
          image="https://i.imgur.com/8yqJzW9.png"
          title="The Band Website"
          description="A website for my band. A place to showcase our music and upcoming gigs."
          skills={["HTML", "CSS", "JavaScript", "PHP"]}
        />
      </div>
    </section>
  );
};

export default Projects;
