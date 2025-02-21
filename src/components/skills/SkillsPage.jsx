// src/components/skills/SkillsPage.jsx
import SkillCard from "./SkillCard";
import "./skills.scss";  // Import the SCSS for styles

import { color, motion } from "framer-motion";

// Sample skills data with level percentages
const skills = [
  { id: 1, title: "JavaScript", level: "Advanced", progress: 90 },
  { id: 2, title: "React", level: "Intermediate", progress: 75 },
  { id: 3, title: "Node.js", level: "Advanced", progress: 85 },
  { id: 4, title: "Taiilwind-CSS", level: "Advanced", progress: 80 },
  // { id: 5, title: "HTML", level: "Advanced", progress: 95 },
  { id: 6, title: "Git", level: "Intermediate", progress: 70 },
  { id: 7, title: "Express.js", level: "Advanced", progress: 85 },
  { id: 3, title: "MongoDB", level: "Advanced", progress: 85 },
];

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h1>My Skills</h1>
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPage;
