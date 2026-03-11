import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 * i }
  })
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Hero = () => {
  return (
    <motion.section
      className="hero"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-content" variants={container}>
        <motion.h1 variants={item}>
          Fresh, Fast &amp; <span>Delicious</span>
        </motion.h1>
        <motion.p variants={item}>
          Order your favorite dishes from the best restaurants in town. SwiftBites delivers hot and
          fresh food right to your doorstep.
        </motion.p>
        <motion.div className="hero-actions" variants={item}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/menu" className="btn btn-primary">
              Explore Menu
            </Link>
          </motion.div>
          <motion.a href="#about" className="btn btn-outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className="hero-image" variants={imageVariants}>
        <div className="hero-image-card">
          <img
            src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Delicious food"
          />
          <div className="hero-overlay-card">
            <span>Tonight&apos;s Special</span>
            <strong>Chef&apos;s Signature Bowl</strong>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
