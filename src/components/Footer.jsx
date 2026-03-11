import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-inner">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4>SwiftBites</h4>
          <p>Delivering happiness, one bite at a time.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h5>Contact</h5>
          <p><a href="mailto:support@swiftbites.app">support@swiftbites.app</a></p>
          <p><a href="tel:+15550123456">+1 (555) 012-3456</a></p>
          <p><Link to="/contact">Contact form</Link></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h5>Follow Us</h5>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </motion.div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} SwiftBites. All rights reserved.</div>
    </motion.footer>
  );
};

export default Footer;
