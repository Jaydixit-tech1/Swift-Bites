import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FoodGrid from '../components/FoodGrid';
import { useCart } from '../App';
import { categories } from '../data/foodData';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Home = () => {
  const { foodData } = useCart();
  const safeFoodData = Array.isArray(foodData) ? foodData : [];
  const featured = safeFoodData.slice(0, 3);
  const popular = safeFoodData;

  return (
    <>
      <div className="landing-wrap">
        <div className="landing-bg" aria-hidden="true">
          <div className="landing-bg-gradient" />
          <div className="landing-blob landing-blob-1" />
          <div className="landing-blob landing-blob-2" />
          <div className="landing-blob landing-blob-3" />
          <div className="landing-blob landing-blob-4" />
          <div className="landing-dots" />
        </div>
        <div className="landing-content">
          <Hero />
        </div>
      </div>

      <motion.section
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <div className="section-header">
          <h2>Featured Today</h2>
          <p>Curated picks from our chefs, made to impress.</p>
        </div>
        <FoodGrid items={featured} />
      </motion.section>

      <motion.section
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <div className="section-header">
          <h2>Popular Dishes</h2>
          <p>Most ordered dishes loved by our customers.</p>
        </div>
        <FoodGrid items={popular} />
      </motion.section>

      <motion.section
        className="section section-alt"
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <div className="about-grid">
          <div>
            <h2>About SwiftBites</h2>
            <p>
              SwiftBites partners with handpicked local restaurants to bring you unforgettable
              flavors in minutes. From crispy pizzas to decadent desserts, we ensure every dish
              arrives hot, fresh, and exactly how you like it.
            </p>
            <ul className="about-list">
              <li>Curated restaurants with premium quality checks</li>
              <li>Real-time order tracking and speedy delivery</li>
              <li>Exclusive deals and loyalty rewards for regulars</li>
            </ul>
          </div>
          <div className="about-card">
            <h3>Why people love us</h3>
            <ul className="about-metrics">
              <li>
                <strong>10k+</strong>
                <span>Happy customers</span>
              </li>
              <li>
                <strong>150+</strong>
                <span>Partner restaurants</span>
              </li>
              <li>
                <strong>98%</strong>
                <span>On-time delivery</span>
              </li>
            </ul>
            <div className="about-tags">
              {categories.filter((c) => c !== 'All').map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <div className="section-header">
          <h2>What Our Customers Say</h2>
        </div>
        <motion.div
          className="testimonials-grid"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              quote:
                'SwiftBites has completely changed how I order food. Deliveries are always on time and the quality is top-notch.',
              name: 'Alex Johnson',
              role: 'Food Blogger'
            },
            {
              quote:
                'The variety of restaurants and dishes is amazing. I love the interface and how easy it is to reorder my favorites.',
              name: 'Priya Sharma',
              role: 'Marketing Manager'
            },
            {
              quote:
                'The order tracking and support are excellent. I recommend SwiftBites to all my friends and colleagues.',
              name: 'Michael Green',
              role: 'Software Engineer'
            }
          ].map((t, i) => (
            <motion.article
              key={i}
              className="testimonial-card"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
              }}
              whileHover={{ y: -2 }}
            >
              <p>&quot;{t.quote}&quot;</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Home;
