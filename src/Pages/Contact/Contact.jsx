import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (leftRef.current && rightRef.current && lineRef.current) {
      const leftHeight = leftRef.current.offsetHeight;
      const rightHeight = rightRef.current.offsetHeight;
      lineRef.current.style.height = `${Math.max(leftHeight, rightHeight)}px`;
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const MailTo = `mailto:vivek.dkrishnamurthy@gmail.com?subject=Contact Form&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage: ${formData.message}`
    )}`;
    window.location.href = MailTo;
  };

  return (
    <div className="contact-container">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -50, rotateX: 90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        CON<span>TACT</span>
      </motion.h1>

      <div className="contact-main">
        <div className="contact-left" ref={leftRef}>
          {[
            { icon: faPhone, text: '7348862962', delay: 0.1 },
            { icon: faEnvelope, text: 'vivek.krishnamurthy.d@gmail.com', delay: 0.2 },
            { icon: faMapMarked, text: 'Bengaluru North, India', delay: 0.3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="info-box"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 70, delay: item.delay }}
            >
              <FontAwesomeIcon icon={item.icon} />
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="contact-line"
          ref={lineRef}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          style={{ transformOrigin: 'top' }}
        ></motion.div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit} ref={rightRef}>
          {[
            { type: 'text', name: 'name', placeholder: 'Your Name', delay: 0.2 },
            { type: 'email', name: 'email', placeholder: 'Email', delay: 0.3 },
          ].map((input, i) => (
            <motion.input
              key={i}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              required
              onChange={handleChange}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: input.delay }}
            />
          ))}

          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            onChange={handleChange}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
