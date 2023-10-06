import React from "react";
import Card from "./Project-Card";
// @ts-expect-error
import Cantor from "../../../images/Cantor.png";
// @ts-expect-error
import Dhughes from "../../../images/Dhughes-store.webp";

const Projects: React.FC = () => {
  return (
    <section id="Projects">
      <div>
        <h2 className="code-font heading">Projects</h2>
      </div>
      <div id="project-cards">
        <Card
          image="https://i.imgur.com/5QZQ9Xo.png"
          title="Orders/Sales Admin Panel"
          description="Experience the power of streamlined business operations with my Orders/Sales Admin Panel project, built on the robust MERN stack (MongoDB, Express.js, React.js, Node.js). Leveraging a full-stack approach with TypeScript, SCSS, and Jwt authentication, this admin panel is designed to simplify the management of orders and sales data."
          skills={[
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "TypeScript",
            "SCSS",
            "Jwt",
            "Mongoose",
          ]}
          gitHub="https://github.com/JokerZ75/Admin-Panel"
        />
        <Card
          image={Dhughes}
          title="DHughes Store"
          description="Welcome to the future of online retail! This portfolio piece represents the culmination of innovative technologies, blending Next.js, TypeScript, Tailwind CSS, React, MongoDB, and Stripe into a modern e-commerce platform."
          skills={[
            "Next.js",
            "TypeScript",
            "Tailwind.css",
            "React.js",
            "MongoDB",
            "Stripe",
          ]}
          gitHub="https://github.com/JokerZ75/ecommerce-web"
          liveDemo="https://ecommerce-web-dhughes-store.vercel.app/"
        />
        <Card
          image={Cantor}
          title="Cantor College"
          description="This was my first ever full website. The Website was made for one of my modules. It allowed me to learn PHP and start my journey. It has a few styling issues, especially on Desktop view but it was a great learning experience and I no longer have these problems in my work now"
          skills={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
          liveDemo="https://cantor-college-bydh.000webhostapp.com/index.php"
          gitHub="https://github.com/JokerZ75/Cantor_College"
        />
      </div>
    </section>
  );
};

export default Projects;
