import React from 'react';
import { motion } from 'framer-motion';
import FoodCard from './FoodCard';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const FoodGrid = ({ items = [], loading }) => {
  const safeItems = Array.isArray(items) ? items : [];
  if (loading) {
    return (
      <motion.div
        className="food-grid"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="food-card skeleton"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: index * 0.02 }}
          >
            <div className="food-card-image" />
            <div className="food-card-body">
              <div className="skeleton-line skeleton-line-lg" />
              <div className="skeleton-line" />
              <div className="food-card-footer">
                <div className="skeleton-pill" />
                <div className="skeleton-pill" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="food-grid"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {safeItems.map((item) => (
        <motion.div key={item.id} className="food-grid-item" variants={itemVariant}>
          <FoodCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FoodGrid;
