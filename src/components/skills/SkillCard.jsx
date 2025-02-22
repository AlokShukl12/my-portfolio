// src/components/skills/SkillCard.jsx
import { motion } from "framer-motion"; // Import Framer Motion for animation
import PropTypes from 'prop-types'; // Import PropTypes for props validation

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and off-screen
      animate={{ opacity: 1, y: 0 }} // Fade in and slide to position
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }} // Slightly scale up the card on hover
    >
      <div className="skill-info">
        <h3>{skill.title}</h3>
        <p>{skill.level}</p>

        {/* Progress bar to represent the skill level */}
        <div className="progress-bar">
          <motion.div
            className="progress"
            style={{ width: `${skill.progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};
SkillCard.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
};

export default SkillCard;

