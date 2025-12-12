import React from 'react';
import { motion } from 'framer-motion';
import heal from '../../assets/heal.png';
import easy from '../../assets/easyStay.png';
import skin from '../../assets/skin.jpeg';
import './Project.css';

const Project = () => {
  const details = [
    {
      image: heal,
      name: 'Heal At Home',
      Live: 'https://healathome.netlify.app/',
      Git: 'https://github.com/Vivek-DK/Heal',
      about: 'Web platform for elderly users to book healthcare assistants and appointments. Includes hospital search and doctor dashboard.',
    },
    {
      image: easy,
      name: 'Easy Stay',
      Live: 'https://viv-easystay.netlify.app/',
      Git: 'https://github.com/Vivek-DK/Easy-Stay',
      about: 'A web app to book rental properties with location-based search, JWT authentication, and dynamic React components.',
    },
    {
      image: skin,
      name: 'Anjelic',
      Git: "https://github.com/Vivek-DK/angelic",
      Live: "https://angelic-viv.vercel.app/",
      about: 'A website for analyzing skin tone, face shape and providing personalized color, outfit and accessories suggestions along with shopping links.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  const descVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="projects-section">
      <motion.h2
        className="title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Pro<span>jects.</span>
      </motion.h2>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {details.map((item, index) => (
          <motion.div
            key={index}
            className="project-tile"
            variants={cardVariants}
          >
            <motion.div className="image" variants={imageVariants}>
              <img src={item.image} alt={item.name} />
            </motion.div>

            <motion.div className="project-description" variants={descVariants}>
              <h3>{item.name}</h3>
              <p>{item.about}</p>
              <div className="project-links">
                {item.Live && item.Git ? (
                  <>
                    <motion.a
                      href={item.Live}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={item.Git}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                    >
                      GitHub
                    </motion.a>
                  </>
                ) : (
                  <motion.p variants={descVariants}>
                    {item.status}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
