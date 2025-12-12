import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLightbulb, faMoon, faHome, faUser, faCode, faCogs, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState(localStorage.getItem('index') || 0);
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: faHome, id: 'home' },
    { name: 'About', icon: faUser, id: 'about' },
    { name: 'Project', icon: faCode, id: 'project' },
    { name: 'Skills', icon: faCogs, id: 'skills' },
    { name: 'Experience', icon: faBriefcase, id: 'experience' },
    { name: 'Contact', icon: faEnvelope, id: 'contact' }
  ];

  const handleToggle = (index) => {
    const route = navItems[index].id;

    if (window.location.pathname === "/" || route === "home") {
      if (route === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(route);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate("/", { state: { section: route } });
    }

    setActive(index);
    localStorage.setItem("index", index);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(item => item.id === entry.target.id);
          if (index !== -1) {
            setActive(index);
            localStorage.setItem('index', index);
          }
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if(location.state?.from === 'home'){
      const index = navItems.findIndex(item => item.id === 'contact');
      setActive(index);
      localStorage.setItem('index', index);
    }
  }, [location]);

  useEffect(() => {
    const theme = light ? 'light' : 'dark';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [light]);

  return (
    <>
      <motion.div 
        className='navbar'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="right">
          <motion.h2>{'Portfolio.'}</motion.h2>
        </div>

        <div className="center">
          <ul id="tags">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                onClick={() => handleToggle(index)}
                className={active == index ? 'clicked active' : 'clicked'}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="left">
          <button onClick={() => setLight(prev => !prev)}>
            {light ? (
              <>
                <span><FontAwesomeIcon icon={faMoon} /></span>
                Dark
              </>
            ) : (
              <>
                <span><FontAwesomeIcon icon={faLightbulb} /></span>
                Light
              </>
            )}
          </button>
          <a href="/vivek_dk_resume (2).pdf" download>
            <span><FontAwesomeIcon icon={faDownload} /></span>
            Resume
          </a>
        </div>
      </motion.div>

      <div className="bottom-nav">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={active == index ? 'bottom-item active' : 'bottom-item'}
            onClick={() => handleToggle(index)}
          >
            <FontAwesomeIcon icon={item.icon} className="bottom-icon" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
