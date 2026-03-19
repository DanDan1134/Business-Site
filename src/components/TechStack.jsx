import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import './TechStack.css'

const codeTools = [
  { name: 'React', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'SQL', category: 'Database' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
]

const builders = [
  { name: 'Squarespace', category: 'Builder' },
  { name: 'Wix', category: 'Builder' },
  { name: 'GoDaddy', category: 'Builder' },
]

export default function TechStack() {
  return (
    <section className="techstack" id="tech">
      <ScrollReveal>
        <span className="section-label">Technology</span>
        <h2 className="section-title">Tools and platforms I work with</h2>
      </ScrollReveal>

      <div className="tech-group">
        <ScrollReveal delay={0.1}>
          <h3 className="tech-group-title">Code & Frameworks</h3>
        </ScrollReveal>
        <div className="tech-grid">
          {codeTools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={0.05 * i}>
              <motion.div
                className="tech-badge"
                whileHover={{ scale: 1.05, borderColor: 'rgba(74, 122, 155, 0.4)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="tech-name">{tool.name}</span>
                <span className="tech-category">{tool.category}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="tech-group">
        <ScrollReveal delay={0.1}>
          <h3 className="tech-group-title">Website Builders</h3>
          <p className="tech-group-desc">
            Not every project needs custom code. I also build on managed platforms
            for clients who want easy self-service editing after launch.
          </p>
        </ScrollReveal>
        <div className="tech-grid builders">
          {builders.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={0.05 * i}>
              <motion.div
                className="tech-badge builder"
                whileHover={{ scale: 1.05, borderColor: 'rgba(74, 122, 155, 0.4)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="tech-name">{tool.name}</span>
                <span className="tech-category">{tool.category}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
