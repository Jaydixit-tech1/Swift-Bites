import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const About = () => {
  const values = [
    {
      icon: '🥗',
      title: 'Fresh Ingredients',
      text: 'We partner only with restaurants that meet our quality standards for fresh, locally sourced ingredients.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      text: 'Average delivery in under 30 minutes. Real-time tracking so you know exactly when your order arrives.'
    },
    {
      icon: '💚',
      title: 'Customer First',
      text: '24/7 support, easy refunds, and loyalty rewards. Your satisfaction is our priority.'
    }
  ];

  const stats = [
    { number: '10k+', label: 'Happy Customers' },
    { number: '150+', label: 'Partner Restaurants' },
    { number: '98%', label: 'On-Time Delivery' },
    { number: '4.8', label: 'App Rating' }
  ];

  return (
    <motion.section
      className="section about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="about-hero"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>About SwiftBites</h1>
        <p className="about-hero-sub">
          Delivering happiness, one bite at a time — since day one.
        </p>
        <Link to="/menu" className="btn btn-primary">Explore Menu</Link>
      </motion.div>

      <motion.div
        className="about-story section-alt"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2>Our Story</h2>
        <p>
          SwiftBites started with a simple idea: great food should reach your door hot, fresh, and
          hassle-free. We partner with handpicked local restaurants to bring you a curated menu of
          pizzas, burgers, pasta, desserts, and drinks — all with the same quality you&apos;d expect
          dining in.
        </p>
        <p>
          Today we serve thousands of orders every day, with real-time tracking, secure payment
          options (card, UPI, and cash on delivery), and a support team that&apos;s always here to help.
        </p>
      </motion.div>

      <motion.div
        className="about-values"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2>What We Stand For</h2>
        <div className="values-grid">
          {values.map((item, i) => (
            <motion.article
              key={item.title}
              className="value-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="value-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="about-stats"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
