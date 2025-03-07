import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './App.module.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logo}>Jira Support Hub</div>
        <nav className={styles.nav}>
          <div className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
            <li><a href="#guides" onClick={toggleMenu}>Guides</a></li>
            <li><a href="#troubleshooting" onClick={toggleMenu}>Troubleshooting</a></li>
            <li><a href="#resources" onClick={toggleMenu}>Resources</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to Jira Support Hub</h1>
          <p>Your one-stop resource for mastering Jira with guides, tips, and troubleshooting.</p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.section>

        <section id="guides" className={styles.section}>
          <h2>Guides</h2>
          <div className={styles.cardContainer}>
            {['Setting Up Your First Project', 'Managing Workflows', 'Creating Custom Dashboards'].map((title, index) => (
              <motion.div
                key={index}
                className={styles.card}
                whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
              >
                {title}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="troubleshooting" className={styles.section}>
          <h2>Troubleshooting</h2>
          <div className={styles.cardContainer}>
            {['Login Issues', 'Sync Errors', 'Permission Problems'].map((title, index) => (
              <motion.div
                key={index}
                className={styles.card}
                whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
              >
                {title}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="resources" className={styles.section}>
          <h2>Resources</h2>
          <ul className={styles.resourceList}>
            <li><a href="#">Official Jira Documentation</a></li>
            <li><a href="#">Community Forums</a></li>
            <li><a href="#">Video Tutorials</a></li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Jira Support Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;