import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import './Audience.css'

const audiences = [
  {
    title: 'Companies',
    description: 'Professional web presence that builds trust and drives growth for businesses of any size.',
    icon: '◆',
  },
  {
    title: 'Restaurants',
    description: 'Beautiful menus, online ordering integration, and reservation systems that fill tables.',
    icon: '◈',
  },
  {
    title: 'Entrepreneurs',
    description: 'Launch your idea with a polished site that captures leads and converts from day one.',
    icon: '◇',
  },
  {
    title: 'Real Estate',
    description: 'Property listings, virtual tours, and lead capture that closes deals faster.',
    icon: '▣',
  },
  {
    title: 'Local Services',
    description: 'Get found online with SEO-optimized sites that turn searches into phone calls.',
    icon: '◎',
  },
  {
    title: 'E-Commerce',
    description: 'Full online stores with payment processing, inventory, and a seamless checkout experience.',
    icon: '⬡',
  },
]

export default function Audience() {
  return (
    <section className="audience" id="services">
      <ScrollReveal>
        <span className="section-label">Who I Build For</span>
        <h2 className="section-title">Websites for every kind of business</h2>
      </ScrollReveal>

      <div className="audience-grid">
        {audiences.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1} className="audience-grid-item">
            <motion.div
              className="audience-card"
              whileHover={{ y: -4, borderColor: 'rgba(77, 171, 38, 0.35)' }}
              transition={{ duration: 0.3 }}
            >
              <span className="audience-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
