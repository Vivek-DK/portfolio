import React from 'react';
import { motion } from 'framer-motion';
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
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut'
      }
    }
  };
};

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.h2
            className="about-title"
            variants={fadeIn('up', 0)}
          >
            About<span> Me.</span>
          </motion.h2>

          <motion.p
            className="about-description"
            variants={fadeIn('up', 0.2)}
          >
            My name is <strong>Vivek D K</strong>, a passionate Full Stack Developer from Bangalore. 
            I specialize in building responsive web applications using React.js, Node.js, and MongoDB. 
            I enjoy solving real-world problems through clean, scalable, and efficient code.
          </motion.p>

          <div className="about-details">

            <motion.div
              className="about-col"
              variants={fadeIn('right', 0.3)}
            >
              <p><strong>Name:</strong> Vivek D K</p>
              <p><strong>Phone:</strong> +91 7348862962</p>
              <p><strong>Experience:</strong> Fresher</p>

              <p>
                <strong>LinkedIn:</strong>

                <a
                  href="https://www.linkedin.com/in/vivekdk1310"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/vivekdk1310
                </a>
              </p>
            </motion.div>

            <motion.div
              className="about-col"
              variants={fadeIn('left', 0.4)}
            >
              <p><strong>Age:</strong> 21</p>
              <p><strong>Address:</strong> Bangalore North, India</p>
              <p><strong>Email:</strong> vivek.dkrishnamurthy@gmail.com</p>

              <p>
                <strong>GitHub:</strong>

                <a
                  href="https://github.com/Vivek-DK"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Vivek-DK
                </a>
              </p>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;