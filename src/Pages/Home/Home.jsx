import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import vivek from '../../assets/propic1.png';
import About from '../About/About';
import Project from '../Projects/Project';
import SkillBar from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const titleVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const fadeUp = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 } },
};

const Home = () => {
  const name = "Hi, I'm Vivek D K";
  const navigate = useNavigate();

  const handleHireMe = () => {
    lenis.scrollTo('#contact');
  };

  return (
    <section data-lenis-root>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={titleVariants}
        id='home'
      >
        <div className='home'>
          <motion.div
            className="intro"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h1 variants={titleVariants}>
              {name.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariant} style={{ display: 'inline-block' }}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Full Stack Web Developer
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              I'm a passionate full stack developer specializing in React for modern, responsive UI, with MongoDB and growing skills in Node.js and Express. Always eager to learn, build, and deliver impactful web experiences...
            </motion.p>

            <motion.button
              className="hire"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHireMe}
            >
              Hire Me
            </motion.button>
          </motion.div>

          <motion.div
            className="img-container"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="profile-wrapper">
              <img src={vivek} alt="Vivek D K" />
            </div>
          </motion.div> 
        </div>
      </motion.div>

      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="skills">
        <SkillBar />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </section>
  );
};

export default Home;
