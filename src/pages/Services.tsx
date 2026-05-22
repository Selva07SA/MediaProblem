import { motion } from 'framer-motion';
import './Services.css';

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'SaaS',
      title: 'SaaS Explanation videos',
      description:
        'Clear product-led videos that explain complex software, workflows, and value propositions with polished visuals.',
      features: ['Product Story', 'UI Walkthroughs', 'Motion Design', 'Launch Assets'],
    },
    {
      id: 2,
      icon: '9:16',
      title: 'Short Form videos',
      description:
        'Fast, punchy vertical edits for reels, shorts, ads, and social campaigns designed to hold attention quickly.',
      features: ['Hooks', 'Captions', 'Social Cuts', 'Ad Variants'],
    },
    {
      id: 3,
      icon: '16:9',
      title: 'long form videos',
      description:
        'Structured long-form edits for YouTube, courses, webinars, interviews, and brand content with refined pacing.',
      features: ['Story Flow', 'Clean Audio', 'B-roll', 'Retention Edits'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="services" id="services">
      <motion.section
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Services</h1>
            <p>Focused video systems for SaaS brands, creators, and growth teams.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="services-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature) => (
                    <span key={feature} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
