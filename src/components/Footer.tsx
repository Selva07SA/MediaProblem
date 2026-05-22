import { motion } from 'framer-motion';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Services', path: '/#services' },
    { title: 'Portfolio', path: '/#portfolio' },
    { title: 'Contact', path: '/contact' },
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>MediaProblem</h3>
            <p>Professional media editing solutions for creators and businesses.</p>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Contact Info</h4>
            <p>Email: info@mediaproblem.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} MediaProblem. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
