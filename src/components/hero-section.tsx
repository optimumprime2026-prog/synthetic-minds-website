'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">Driving Performance</p>
          <h1>Your first AI team that never stops working.</h1>
          <p className="hero-copy">
            MM Workshop helps startups and scale-ups accelerate growth by
            building and operating AI-powered business systems. Less manual
            work, lower costs, higher output.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#contact">
              Get started
            </a>
            <a className="button button-secondary" href="#services">
              See what we do
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
        >
          <div className="hero-panel-inner">
            <p>Workshop</p>
            <span />
            <p>Racing</p>
            <span />
            <p>AI Operations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
