import React from 'react';
import { motion } from 'framer-motion';
import { formatINR } from '../utils/currency';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const handleChange = (e) => {
    const raw = e.target.value;
    const value = Math.max(1, Math.floor(Number(raw) || 1));
    onQuantityChange(item.id, value);
  };

  return (
    <motion.div
      className="cart-item"
      layout
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 12 }}
      transition={{ duration: 0.25 }}
    >
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <span className="cart-item-price">{formatINR(item.price)}</span>
      </div>
      <div className="cart-item-actions">
        <input
          type="number"
          min="1"
          max="99"
          value={item.quantity}
          onChange={handleChange}
          className="qty-input"
        />
        <motion.button
          type="button"
          className="btn btn-sm btn-outline"
          onClick={() => onRemove(item.id)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Remove
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartItem;
