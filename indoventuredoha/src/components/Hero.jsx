function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__geometry">
          <div className="hero__frame hero__frame--1" />
          <div className="hero__frame hero__frame--2" />
          <div className="hero__frame hero__frame--3" />
          <div className="hero__triangle hero__triangle--1" />
          <div className="hero__triangle hero__triangle--2" />
          <div className="hero__cylinder" />
        </div>
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
  )
}

export default Hero
