import React from "react";
import Scroller from "../About/Scroller";
import Skill from "../About/Skill";
import { Link } from "gatsby";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { BiWorld } from "@react-icons/all-files/bi/BiWorld";
interface CardProps {
  image: string;
  title: string;
  description: string;
  skills: string[];
  liveDemo?: string;
  gitHub?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  skills,
  liveDemo,
  gitHub,
}) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3 className="heading">{title}</h3>
      </div>
      <div className="card-image-skill">
        <img className="card-image" src={image} alt={title + " image"} />
        <Scroller>
          {skills.map((skill) => (
            <Skill name={skill} />
          ))}
        </Scroller>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
      <div className="card-links">
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noreferrer">
            <BiWorld />
          </a>
        )}
        {gitHub && (
          <a href={gitHub} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
