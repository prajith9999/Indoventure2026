import {
  IconSupply,
  IconSafety,
  IconElectrical,
  IconIntegrity,
} from './PageIcons'

const HIGHLIGHTS = [
  {
    icon: IconSupply,
    title: 'End-to-end supply',
    text: 'Sourcing, import, and distribution of industrial, electrical, safety, and construction products across Qatar.',
  },
  {
    icon: IconSafety,
    title: 'Safety & PPE',
    text: 'Certified personal protective equipment, fire safety, and workplace protection for every site condition.',
  },
  {
    icon: IconElectrical,
    title: 'Electrical solutions',
    text: 'Cables, switchgear, lighting, and power tools for commercial, industrial, and infrastructure projects.',
  },
  {
    icon: IconIntegrity,
    title: 'Trusted delivery',
    text: 'Reliable logistics, transparent communication, and on-time fulfilment you can plan your projects around.',
  },
]

function HeroHighlights() {
  return (
    <section className="hero-highlights" aria-label="What we deliver">
      <div className="container">
        <div className="hero-highlights__intro">
          <p className="hero-highlights__label">Why Indoventure</p>
          <h2 className="hero-highlights__title">
            Your partner for industrial excellence in Qatar
          </h2>
          <p className="hero-highlights__lead">
            We combine global sourcing with local expertise — delivering the
            products and reliability that keep Qatar&apos;s industries moving
            forward.
          </p>
        </div>

        <div className="hero-highlights__grid">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="hero-highlights__card">
                <div className="hero-highlights__icon-wrap">
                  <Icon className="hero-highlights__icon" />
                </div>
                <h3 className="hero-highlights__card-title">{item.title}</h3>
                <p className="hero-highlights__card-text">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroHighlights
