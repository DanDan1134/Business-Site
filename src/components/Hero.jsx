import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const tagline = 'Modern websites that convert visitors into customers.'
  const localFocus = 'Based in Merced, CA, helping local businesses grow online.'

  return (
    <section className="hero">
      <div className="hero-bg-grain" />
      <div className="hero-content">
        <h1 className="hero-heading">
          <motion.img
            className="hero-logo"
            src="/ezwebsitelogolarge.png"
            alt="EZWebsites"
            decoding="async"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />
        </h1>

        <div className="hero-text">
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
          >
            {tagline}
          </motion.p>

          <motion.p
            className="hero-local"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
          >
            {localFocus}
          </motion.p>

          <motion.a
            href="#contact"
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Free Quote
          </motion.a>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}
