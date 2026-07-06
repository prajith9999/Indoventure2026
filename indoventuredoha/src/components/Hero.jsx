import HeroHighlights from './HeroHighlights'

function Hero() {
  return (
    <>
      <section className="hero" aria-label="Welcome">
        <div className="hero__bg" aria-hidden="true">
          <img
            src="/color%20building.png"
            alt=""
            className="hero__photo"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero__bg-overlay" />
        </div>

        <div className="hero__content">
          <div className="hero__overlay">
            <p className="hero__brand">INDOVENTURE Trading</p>
            <h1 className="hero__title">
              Empowering industries through excellence
            </h1>
            <p className="hero__subtitle">
              A leading trading and supply company based in Qatar — delivering
              high-quality industrial, electrical, safety, and construction
              products with unwavering reliability.
            </p>
            <span className="hero__location">Doha, Qatar</span>
          </div>
        </div>
      </section>

      <HeroHighlights />
    </>
  )
}

export default Hero
