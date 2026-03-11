import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../App';
import { formatINR } from '../utils/currency';

const formatCardNumber = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 19);
  const parts = [];
  for (let i = 0; i < digits.length; i += 4) parts.push(digits.slice(i, i + 4));
  return parts.join(' ');
};

const formatExpiry = (value) => {
  const v = value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 2) return `${v.slice(0, 2)}/${v.slice(2)}`;
  return v;
};

const Checkout = () => {
  const { cartItems, cartSubtotal, deliveryFee, total, clearCart } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (cartItems.length === 0) navigate('/cart', { replace: true });
  }, [cartItems.length, navigate]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    payment: 'Card',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: '',
    upiId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      setForm((prev) => ({ ...prev, cardNumber: formatCardNumber(value) }));
      return;
    }
    if (name === 'cardExpiry') {
      setForm((prev) => ({ ...prev, cardExpiry: formatExpiry(value) }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isCardValid = () => {
    const digits = form.cardNumber.replace(/\s/g, '');
    return digits.length >= 13 && digits.length <= 19;
  };

  const isExpiryValid = () => {
    const parts = form.cardExpiry.split('/').map((n) => parseInt(n, 10));
    const [mm, yy] = parts;
    if (!Number.isInteger(mm) || !Number.isInteger(yy) || mm < 1 || mm > 12) return false;
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;
    return yy > currentYear || (yy === currentYear && mm >= currentMonth);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartItems.length) return;
    if (form.payment === 'Card' && (!isCardValid() || !isExpiryValid() || form.cardCvc.length < 3 || !form.cardName.trim())) {
      return;
    }
    if (form.payment === 'UPI' && !form.upiId.trim()) return;
    clearCart();
    navigate('/thank-you');
  };

  const canPlaceOrder = () => {
    if (!cartItems.length) return false;
    if (form.payment === 'Card') return isCardValid() && isExpiryValid() && form.cardCvc.length >= 3 && form.cardName.trim();
    if (form.payment === 'UPI') return form.upiId.trim().length > 0;
    return true;
  };

  if (cartItems.length === 0) return null;

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Checkout</h2>
        <p>Provide your details and secure payment to place your order.</p>
      </div>
      <div className="checkout-layout">
        <motion.form
          className="checkout-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05, duration: 0.35 }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group payment-section">
            <label>Payment Method</label>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="Card"
                  checked={form.payment === 'Card'}
                  onChange={handleChange}
                />
                <span>💳 Card</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={form.payment === 'UPI'}
                  onChange={handleChange}
                />
                <span>📱 UPI</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="Cash"
                  checked={form.payment === 'Cash'}
                  onChange={handleChange}
                />
                <span>💵 Cash on Delivery</span>
              </label>
            </div>

            {form.payment === 'Card' && (
              <motion.div
                className="card-form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    id="cardName"
                    name="cardName"
                    type="text"
                    placeholder="As shown on card"
                    value={form.cardName}
                    onChange={handleChange}
                    autoComplete="cc-name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={form.cardNumber}
                    onChange={handleChange}
                    maxLength={19}
                    autoComplete="cc-number"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cardExpiry">Expiry (MM/YY)</label>
                    <input
                      id="cardExpiry"
                      name="cardExpiry"
                      type="text"
                      placeholder="MM/YY"
                      value={form.cardExpiry}
                      onChange={handleChange}
                      maxLength={5}
                      autoComplete="cc-exp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardCvc">CVC</label>
                    <input
                      id="cardCvc"
                      name="cardCvc"
                      type="password"
                      placeholder="123"
                      value={form.cardCvc}
                      onChange={handleChange}
                      maxLength={4}
                      autoComplete="cc-csc"
                    />
                  </div>
                </div>
                <p className="payment-secure">🔒 Secured payment. Card details are encrypted.</p>
              </motion.div>
            )}

            {form.payment === 'UPI' && (
              <motion.div
                className="upi-form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <div className="form-group">
                  <label htmlFor="upiId">UPI ID</label>
                  <input
                    id="upiId"
                    name="upiId"
                    type="text"
                    placeholder="yourname@upi"
                    value={form.upiId}
                    onChange={handleChange}
                  />
                </div>
                <p className="payment-secure">You&apos;ll complete payment on your UPI app after placing the order.</p>
              </motion.div>
            )}

            {form.payment === 'Cash' && (
              <p className="payment-note">Pay with cash when your order is delivered.</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={!canPlaceOrder()}
            whileHover={canPlaceOrder() ? { scale: 1.02 } : {}}
            whileTap={canPlaceOrder() ? { scale: 0.98 } : {}}
          >
            Place Order
          </motion.button>
        </motion.form>

        <motion.aside
          className="checkout-summary"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
        >
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cartItems.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div>
                    <h4>{item.name}</h4>
                    <span className="summary-qty">x{item.quantity}</span>
                  </div>
                  <span>{formatINR(item.price * item.quantity)}</span>
                </div>
              ))
            )}
          </div>
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
        </motion.aside>
      </div>
    </motion.section>
  );
};

export default Checkout;
