import { motion } from 'framer-motion';
import './SkillCard.css';

const SkillCard = ({ icon, name, level, delay = 0 }) => {
  return (
    <motion.div
      className="skill-card glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="skill-icon">{icon}</div>
      <h4 className="skill-name">{name}</h4>
      <div className="skill-level-container">
        <div className="skill-level-bg">
          <motion.div
            className="skill-level-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.3 }}
          />
        </div>
        <span className="skill-percentage">{level}%</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
