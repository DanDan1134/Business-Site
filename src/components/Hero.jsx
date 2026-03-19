import { motion } from 'framer-motion'
import './Hero.css'

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.06, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const brandName = 'EZWebsites'
  const tagline = 'Modern websites that convert visitors into customers.'

  return (
    <section className="hero">
      <div className="hero-bg-grain" />
      <div className="hero-content">
        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-placeholder">
            <div className="portrait-silhouette">
              <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="100" cy="80" rx="45" ry="50" fill="rgba(74,122,155,0.15)" stroke="rgba(74,122,155,0.3)" strokeWidth="1"/>
                <path d="M30 280 Q30 180 100 170 Q170 180 170 280" fill="rgba(74,122,155,0.1)" stroke="rgba(74,122,155,0.25)" strokeWidth="1"/>
              </svg>
              <span className="portrait-label">Your Photo Here</span>
            </div>
          </div>
        </motion.div>

        <div className="hero-text">
          <h1 className="brand-name" aria-label={brandName}>
            {brandName.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="brand-letter"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: 'easeOut' }}
          >
            {tagline}
          </motion.p>

          <motion.a
            href="#contact"
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6, ease: 'easeOut' }}
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
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}
