import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import vivek from '../../assets/propic1.png';
import './About.css';

const fadeIn = (direction = 'up', delay = 0) => {
  const axis =
    direction === 'up'
      ? { y: 40 }
      : direction === 'down'
      ? { y: -40 }
      : direction === 'left'
      ? { x: 40 }
      : { x: -40 };
  return {
    hidden: { opacity: 0, ...axis },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay, ease: 'easeOut' }
    }
  };
};

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
          <motion.div
            className="about-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
            }}
          >
            <img src={vivek} alt="Vivek D K" />
          </motion.div>
        </Tilt>

        <div className="about-content">
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            About<span> Me.</span>
          </motion.h2>

          <motion.p
            className="about-description"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            My name is <strong>Vivek D K</strong>, a passionate Full Stack Developer from Bangalore. I specialize in building responsive web applications using React.js, Node.js, and MongoDB. I love solving real-world problems through clean and efficient code.
          </motion.p>

          <div className="about-details">
            <motion.div
              className="about-col"
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <p><strong>Name:</strong> Vivek D K</p>
              <p><strong>Phone:</strong> +91 7348862962</p>
              <p><strong>Experience:</strong> Fresher</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vivek-dk/">https://www.linkedin.com/in/vivek-dk/</a></p>
            </motion.div>

            <motion.div
              className="about-col"
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <p><strong>Age:</strong> 21</p>
              <p><strong>Address:</strong> Bangalore North, India</p>
              <p><strong>Email:</strong> vivek.krishnamurthy@gmail.com</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/Vivek-DK">GitHub</a></p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
