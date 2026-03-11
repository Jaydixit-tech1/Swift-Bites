import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import FoodGrid from '../components/FoodGrid';
import { useCart } from '../App';
import { categories } from '../data/foodData';

const Menu = () => {
  const { foodData } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = useMemo(() => {
    let items = Array.isArray(foodData) ? foodData : [];
    if (selectedCategory !== 'All') {
      items = items.filter((item) => item.category === selectedCategory);
    }
    if (search.trim()) {
      const term = search.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
      );
    }
    return items;
  }, [foodData, selectedCategory, search]);

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Our Menu</h2>
        <p>Find your next craving from our curated selection.</p>
      </div>

      <div className="menu-toolbar">
        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              className={`chip ${selectedCategory === category ? 'chip-active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          className="menu-search"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>
      </div>

      <FoodGrid items={filteredItems} loading={loading} />
    </motion.section>
  );
};

export default Menu;
