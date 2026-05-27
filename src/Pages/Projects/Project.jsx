import React from 'react';
import { motion } from 'framer-motion';

import heal from '../../assets/heal.png';
import skin from '../../assets/skin.jpeg';
import agent from '../../assets/Agent_landing_page.png';
import bot from '../../assets/bot.png';
import article from '../../assets/article.png';

import './Project.css';

const Project = () => {

  const details = [

    {
      image: skin,
      name: "Anjelic",

      Live:
        "https://angelic-viv.vercel.app/",

      Git:
        "https://github.com/Vivek-DK/angelic",

      description:
        "AI-powered full-stack platform that analyzes face shape and skin tone using MediaPipe and machine learning.",

      features: [
        "AI-based face shape detection",
        "Skin tone analysis",
        "JWT authentication & OTP verification",
        "Secure contact form integration",
        "Responsive full-stack architecture"
      ],

      techStack: [
        "React.js",
        "TypeScript",
        "Node.js",
        "FastAPI",
        "MongoDB",
        "MediaPipe",
        "Scikit-learn",
        "JWT",
        "Render",
        "Vercel"
      ]
    },

    {
      image: agent,

      name:
        "Agents & Task Management System",

      Live:
        "https://agents-and-task-management-v1.vercel.app/",

      Git:
        "https://github.com/Vivek-DK/AgentsAndTaskManagement-v1",

      description:
        "Scalable full-stack task management platform for automated agent task distribution with role-based dashboards and bulk task processing.",

      features: [
        "JWT authentication & role-based access",
        "Bulk task upload using CSV/XLSX",
        "Automated balanced task distribution",
        "Admin & agent dashboards",
        "Secure API validation and task management"
      ],

      techStack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Multer",
        "Joi",
        "Render",
        "Vercel"
      ]
    },

    {
      image: article,

      name:
        "AI Article Scraper & Rewriter",

      Live:
        "https://ai-article-scraper-rewriter.vercel.app/",

      Git:
        "https://github.com/Vivek-DK/AI-Article-Scraper-Rewriter",

      description:
        "Full-stack AI platform that scrapes, analyzes, and rewrites articles using LLMs and competitor content analysis.",

      features: [
        "Automated web scraping using Cheerio",
        "AI-powered article rewriting",
        "Competitor analysis via search APIs",
        "Structured MongoDB data storage",
        "Interactive React dashboard"
      ],

      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cheerio",
        "Axios",
        "OpenRouter API",
        "Serper API",
        "Vite"
      ]
    },

    {
      image: heal,

      name:
        "Heal At Home",

      Live:
        "https://healathome.netlify.app/",

      Git:
        "https://github.com/Vivek-DK/Heal",

      description:
        "Healthcare booking platform for elderly users with appointment and hospital management.",

      features: [
        "Doctor dashboard",
        "Healthcare assistant booking",
        "Hospital search",
        "Appointment scheduling",
        "Responsive interface"
      ],

      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "REST API"
      ]
    },

    {
      image: bot,

      name:
        "Trading Bot",

      Git:
        "https://github.com/Vivek-DK/trading_bot",

      description:
        "CLI-based Binance Futures trading bot with structured logging and order management.",

      features: [
        "MARKET & LIMIT orders",
        "Binance Futures integration",
        "Input validation",
        "Structured logging",
        "Modular architecture"
      ],

      techStack: [
        "Python",
        "Binance API",
        "CLI",
        "Logging",
        "Automation"
      ]
    }
  ];

  /* ANIMATIONS */

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (

    <section className="portfolio-projects-section">

      <motion.h2
        className="portfolio-projects-title"

        variants={titleVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: false,
          amount: 0.3,
        }}
      >
        Pro<span>jects.</span>
      </motion.h2>

      <motion.div
        className="portfolio-projects-grid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: false,
          amount: 0.12,
        }}
      >

        {details.map((item, index) => (

          <motion.div
            key={index}

            className="portfolio-project-card"

            variants={cardVariants}

            whileHover={{
              y: -8,
            }}
          >

            <div className="portfolio-project-image-wrapper">

              <img
                src={item.image}
                alt={item.name}
                className="portfolio-project-image"
              />

            </div>

            <div className="portfolio-project-content">

              <h3 className="portfolio-project-name">
                {item.name}
              </h3>

              <p className="portfolio-project-summary">
                {item.description}
              </p>

              <div className="portfolio-project-block">

                <h4>Features</h4>

                <ul>

                  {item.features.map((feature, idx) => (

                    <li key={idx}>
                      {feature}
                    </li>

                  ))}

                </ul>

              </div>

              <div className="portfolio-project-block">

                <h4>Tech Stack</h4>

                <div className="portfolio-project-tech-list">

                  {item.techStack.map((tech, idx) => (

                    <span
                      key={idx}
                      className="portfolio-project-tech-badge"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              <div className="portfolio-project-links">

                {item.Live && item.Git ? (

                  <>
                    <motion.a
                      href={item.Live}
                      target="_blank"
                      className="portfolio-project-link"

                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={item.Git}
                      target="_blank"
                      className="portfolio-project-link"

                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      GitHub
                    </motion.a>
                  </>

                ) : (

                  <motion.a
                    href={item.Git}
                    target="_blank"
                    className="portfolio-project-link"

                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    GitHub
                  </motion.a>

                )}

              </div>

            </div>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
};

export default Project;