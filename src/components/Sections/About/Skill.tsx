import React from "react";

interface SkillProps {
  name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
  return (
    <li>
      <span className="skill">{name}</span>
    </li>
  );
};


export default Skill;
