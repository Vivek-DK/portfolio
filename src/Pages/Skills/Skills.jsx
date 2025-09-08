import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillData = [
  { name: 'JavaScript', value: 90 },
  { name: 'React.js', value: 80 },
  { name: 'Node.js', value: 70 },
  { name: 'HTML5', value: 85 },
  { name: 'CSS3', value: 80 },
  { name: 'Python', value: 75 },
  { name: 'C', value: 75 },
  { name: 'My Sql', value: 80 },
  { name: 'MongoDB', value: 80 },
  { name: 'Git/Github', value: 100 },
  { name: 'Google Colab', value: 90 },
  { name: 'Netlify', value: 100 },
];

const barVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: (custom) => ({
    width: `${custom}%`,
    opacity: 1,
    transition: { duration: 1, ease: 'easeInOut' }
  })
};

const SkillBar = () => {
  return (
    <div className="skillbar-sec">
      <motion.h2
        className="skillbar-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Skills.</span>
      </motion.h2>

      <div className="skillbar-container">
        {skillData.map((skill, index) => (
          <motion.div
            className="skillbar"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="skillbar-info">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="skillbar-track">
              <motion.div
                className="skillbar-fill"
                custom={skill.value}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={barVariants}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillBar;
