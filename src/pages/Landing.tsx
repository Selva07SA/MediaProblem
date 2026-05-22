import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { detectAndStoreRegion } from '../utils/cookies';
import './Landing.css';

export const Landing = () => {
  useEffect(() => {
    detectAndStoreRegion();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: '✨',
      title: 'Professional Editing',
      description: 'Expert video and media editing services for all your creative needs.',
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.',
    },
    {
      icon: '💎',
      title: 'Premium Quality',
      description: 'High-definition output with cutting-edge technology.',
    },
    {
      icon: '🎯',
      title: 'Custom Solutions',
      description: 'Tailored services to meet your specific requirements.',
    },
  ];

  return (
    <div className="landing" id="home">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={false}
      >
        <div className="container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial={false}
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>
              Transform Your Creative Vision
            </motion.h1>
            <motion.p variants={itemVariants}>
              Professional media editing solutions for creators, businesses, and brands
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <a href="/contact" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={false}
          >
            <div className="hero-box"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose MediaProblem?
          </motion.h2>

          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
