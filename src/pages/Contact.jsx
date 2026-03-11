import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'support@swiftbites.app',
      link: 'mailto:support@swiftbites.app'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 012-3456',
      link: 'tel:+15550123456'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Food Street, Downtown',
      link: null
    }
  ];

  return (
    <motion.section
      className="section contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Get in Touch</h2>
        <p>Have a question or feedback? We&apos;d love to hear from you.</p>
      </div>

      <div className="contact-layout">
        <motion.div
          className="contact-info-cards"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>Contact Information</h3>
          {contactInfo.map((item) => (
            <div key={item.title} className="contact-card">
              <span className="contact-card-icon">{item.icon}</span>
              <div>
                <h4>{item.title}</h4>
                {item.link ? (
                  <a href={item.link}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            </div>
          ))}
          <div className="contact-hours">
            <h4>Support Hours</h4>
            <p>Mon – Fri: 9:00 AM – 9:00 PM</p>
            <p>Sat – Sun: 10:00 AM – 8:00 PM</p>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          {submitted ? (
            <div className="contact-success">
              <span className="success-icon">✓</span>
              <h3>Message sent!</h3>
              <p>We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Order issue, Feedback"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
