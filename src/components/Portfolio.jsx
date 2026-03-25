import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import './Portfolio.css'

const projects = [
  {
    title: 'DOORmatic',
    subtitle: 'The Garage Door Co.',
    description:
      'A professional website for a garage door installation and repair company. Clean layout, service showcases, and lead capture.',
    url: 'https://doormatic.netlify.app/',
    image: '/prevworkgallery/doormatic.png',
    previewClass: 'portfolio-preview--light',
  },
  {
    title: 'Graduate Cleaning Service',
    subtitle: 'Professional Cleaning',
    description:
      'A polished website for a cleaning service business with booking integration and service area coverage.',
    url: 'https://www.graduatecleaningservice.com/',
    image: '/prevworkgallery/GCS.jpg',
    previewClass: 'portfolio-preview--dark',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <ScrollReveal>
        <span className="section-label">Previous Work</span>
        <h2 className="section-title">Websites I've built for real businesses</h2>
      </ScrollReveal>

      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.15} direction="up">
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`portfolio-preview ${project.previewClass}`}>
                <img
                  className="portfolio-thumb"
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="portfolio-preview-scrim" aria-hidden />
                <div className="portfolio-preview-meta">
                  <h3 className="portfolio-preview-title">{project.title}</h3>
                  <span className="portfolio-preview-subtitle">{project.subtitle}</span>
                </div>
              </div>
              <div className="portfolio-info">
                <p className="portfolio-description">{project.description}</p>
                <span className="portfolio-link">
                  Visit Site
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
