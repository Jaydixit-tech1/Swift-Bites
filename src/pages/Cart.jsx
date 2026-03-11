import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CartItem from '../components/CartItem';
import { useCart } from '../App';
import { formatINR } from '../utils/currency';

const Cart = () => {
  const { cartItems, cartSubtotal, deliveryFee, total, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!cartItems.length) return;
    navigate('/checkout');
  };

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Your Order</h2>
        <p>Review your selections before proceeding to checkout.</p>
      </div>

      <AnimatePresence mode="wait">
        {cartItems.length === 0 ? (
          <motion.div
            className="empty-state"
            key="empty"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>Your cart is empty. Explore our menu to add delicious meals.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/menu" className="btn btn-primary">
                Browse Menu
              </Link>
            </motion.div>
          </motion.div>
        ) : (
        <motion.div
          className="cart-layout"
          key="filled"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="cart-list">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </AnimatePresence>
          </div>
          <motion.aside
            className="cart-summary"
            key="summary"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.35 }}
          >
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatINR(cartSubtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>{deliveryFee ? formatINR(deliveryFee) : 'Free'}</span>
            </div>
            <hr />
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>
            <motion.button
              type="button"
              className="btn btn-primary btn-full"
              onClick={handleCheckout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Proceed to Checkout
            </motion.button>
          </motion.aside>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Cart;
