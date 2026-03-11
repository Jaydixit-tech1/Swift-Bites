import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../App';
import { formatINR } from '../utils/currency';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop';

const FoodCard = ({ item }) => {
  const { addToCart } = useCart();
  const [imgSrc, setImgSrc] = useState(item.image || FALLBACK_IMAGE);

  const handleImageError = () => {
    setImgSrc(FALLBACK_IMAGE);
  };

  return (
    <motion.article
      className="food-card"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="food-card-image">
        <motion.img
          src={imgSrc}
          alt={item.name}
          loading="lazy"
          onError={handleImageError}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="food-card-body">
        <h3>{item.name}</h3>
        <p className="food-card-desc">{item.description}</p>
        <div className="food-card-footer">
          <span className="food-card-price">{formatINR(item.price)}</span>
          <motion.button
            type="button"
            className="btn btn-sm btn-accent"
            onClick={() => addToCart(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

export default FoodCard;
