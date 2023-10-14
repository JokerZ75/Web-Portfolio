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
          title="Orders/Sales Admin Panel (recommend view on youtube)"
          description="I recommend you watch it on youtube by clicking the video title. Experience the power of streamlined business operations with my Orders/Sales Admin Panel project, built on the robust MERN stack (MongoDB, Express.js, React.js, Node.js). Leveraging a full-stack approach with TypeScript, SCSS, and Jwt authentication, this admin panel is designed to simplify the management of orders and sales data."
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
        >
          <iframe
            className="card-image"
            src="https://www.youtube.com/embed/nEDY_QL7a_k?si=bvWdKbGN9J7dsgQN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen={true}
          ></iframe>
        </Card>
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
