import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import vivek from '../../assets/profile_pic.png';

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

const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  const name = "Hi, I'm Vivek D K";

  const handleHireMe = () => {
    lenis.scrollTo('#contact');
  };

  return (
    <>
      <section className="hero-section" id="home">

        <div className="hero-container">

          {/* LEFT CONTENT */}

          <motion.div
            className="hero-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            <motion.h1
              className="hero-title"
              variants={titleContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2
              className="hero-role"
              variants={fadeUp}
            >
              Full Stack Web Developer
            </motion.h2>

            <motion.p
              className="hero-description"
              variants={fadeUp}
            >
              I build responsive full-stack web applications using
              React.js, Node.js, Express.js, and MongoDB with focus on
              performance, scalability, and modern UI experiences.
            </motion.p>

            <motion.div
              className="hero-buttons"
              variants={fadeUp}
            >

              <motion.button
                className="hire-btn"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                onClick={handleHireMe}
              >
                Hire Me
              </motion.button>

              <motion.a
                href="https://github.com/Vivek-DK"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
              >
                GitHub
              </motion.a>

            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            className="hero-image-section"
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          >

            <div className="hero-image-wrapper">
              <img src={vivek} alt="Vivek D K" />
            </div>

          </motion.div>

        </div>
      </section>

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
    </>
  );
};

export default Home;