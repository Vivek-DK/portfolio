  import React, { useEffect, useRef, useState } from 'react';
  import './Experience.css';
  import { FaCss3, FaFire, FaJs, FaReact } from 'react-icons/fa';
  import certificate from '../../assets/certificates.png';
  import { motion } from 'framer-motion';

  const Experience = () => {
    const [prev, setPrev] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (imageRef.current && !imageRef.current.contains(e.target)) {
          setPrev(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const fadeUp = {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.08,
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1]  
        }
      }),
    };


    return (
      <div className='Experience-container'>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          Exper<span>ience</span>
        </motion.h2>

        <motion.div
          className="experience-sec"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="header">
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <strong>Project:</strong> Easy Stay - Vacation Home Booking Web Page
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <strong>Role:</strong> Full Stack Web Development Intern | SmartEd | Apr 2025 - Jul 2025
            </motion.p>

            <div className="links">
              <motion.a
                href='https://viv-easystay.netlify.app'
                target='_blank'
                rel='noreferrer'
                whileHover={{ scale: 1.05 }}
              >
                <button type="button">Live</button>
              </motion.a>
              <motion.a
                href="https://github.com/Vivek-DK/Easy-Stay"
                target='_blank'
                rel='noreferrer'
                whileHover={{ scale: 1.05 }}
              >
                <button type="button">GitHub</button>
              </motion.a>
            </div>
          </div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            A responsive React.js web app to simulate vacation rental bookings. Includes secure user login with Firebase, dynamic property listing, and clean UI design.
          </motion.p>

          <div className="description">
            {[
              "Built responsive UI with React.js",
              "Integrated Firebase Auth (login/logout)",
              "Dynamic forms for property addition",
              "State-driven property display & filter",
              "Protected routing using React Router",
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i + 4}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="tools"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            custom={10}
          >
            <div className="tech-item"><FaReact /> <p>React.js</p></div>
            <div className="tech-item"><FaJs /> <p>JavaScript</p></div>
            <div className="tech-item"><FaFire /> <p>Firebase</p></div>
            <div className="tech-item"><FaCss3 /> <p>CSS3</p></div>
          </motion.div>

          <motion.div
            className="summary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            custom={11}
          >
            <p>
              This project helped me strengthen my understanding of component-based architecture, Firebase authentication, and real-time UI feedback. I also improved my ability to break down large UIs into reusable components and manage application state effectively.
            </p>
          </motion.div>

          <motion.div
            className="certificate"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            custom={12}
          >
            <h4>Certificate</h4>
            <motion.button
              type="button"
              onClick={() => setPrev(true)}
              whileHover={{ scale: 1.05 }}
            >
              View Certificate
            </motion.button>
          </motion.div>
        </motion.div>

        {prev && (
          <div className="modal-backdrop">
            <motion.div
              className="ex-image"
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img src={certificate} alt="Certificate Preview" />
            </motion.div>
          </div>
        )}
      </div>
    );
  };

  export default Experience;
