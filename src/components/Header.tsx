import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/#home' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="header"
      initial={false}
    >
      <div className="container header-content">
        <Link to="/#home" className="logo">
          <motion.div
            initial={false}
          >
            MediaProblem
          </motion.div>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              initial={false}
            >
              <Link
                to={item.path}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="header-actions"
          initial={false}
        >
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </motion.div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  );
};
