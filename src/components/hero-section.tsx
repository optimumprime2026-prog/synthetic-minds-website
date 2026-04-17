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
          <p className="eyebrow">The Full-Stack Compute Efficiency Company</p>
          <h1>Make AI economically sustainable and operationally scalable.</h1>
          <p className="hero-copy">
            Synthetic Minds helps organizations reduce AI infrastructure waste,
            optimize compute performance, and scale intelligent systems with
            confidence.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#contact">
              Book a call
            </a>
            <a className="button button-secondary" href="#contact">
              Request a consultation
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
            <p>Assess</p>
            <span />
            <p>Optimize</p>
            <span />
            <p>Scale</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
