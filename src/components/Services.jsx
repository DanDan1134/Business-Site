import ScrollReveal from './ScrollReveal'
import './Services.css'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We talk about your business, your goals, and what you need your website to accomplish. No jargon, just a conversation.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'I create a custom design tailored to your brand. You see it before any code is written and we iterate until it\'s right.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Your site gets built with clean, fast code — or on a platform like Squarespace if that fits better. Fully responsive across all devices.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We go live. I handle hosting, domain setup, and provide ongoing support so you never feel stranded after launch.',
  },
]

export default function Services() {
  return (
    <section className="services" id="process">
      <ScrollReveal>
        <span className="section-label">How It Works</span>
        <h2 className="section-title">From idea to live website in four steps</h2>
      </ScrollReveal>

      <div className="steps-container">
        <div className="steps-line" />
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.12} direction="left">
            <div className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
