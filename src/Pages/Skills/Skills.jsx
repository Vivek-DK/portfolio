import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillData = [

  // Frontend
  { name: 'React.js', value: 85 },
  { name: 'TypeScript', value: 75 },
  { name: 'JavaScript', value: 88 },
  { name: 'HTML5', value: 90 },
  { name: 'CSS3', value: 82 },
  { name: 'Tailwind CSS', value: 80 },

  // Backend
  { name: 'Node.js', value: 75 },
  { name: 'Express.js', value: 72 },

  // Database
  { name: 'MongoDB', value: 78 },
  { name: 'MySQL', value: 74 },

  // Programming Languages
  { name: 'Python', value: 76 },
  { name: 'C', value: 70 },

  // Tools & Platforms
  { name: 'Git & GitHub', value: 82 },
  { name: 'Postman', value: 80 },
  { name: 'Vercel', value: 85 },
  { name: 'Netlify', value: 82 },
  { name: 'Google Colab', value: 78 },

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
