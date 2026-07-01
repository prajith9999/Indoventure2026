function PageHero({ icon: Icon, label, title, description }) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="page-hero__bg" aria-hidden="true">
        <div className="page-hero__shape page-hero__shape--1" />
        <div className="page-hero__shape page-hero__shape--2" />
        <div className="page-hero__shape page-hero__shape--3" />
      </div>

      <div className="container page-hero__inner">
        <div className="page-hero__icon-wrap">
          <Icon className="page-hero__icon" />
        </div>
        <div className="page-hero__content">
          {label && <p className="page-hero__label">{label}</p>}
          <h1 id="page-hero-title" className="page-hero__title">{title}</h1>
          {description && <p className="page-hero__description">{description}</p>}
        </div>
      </div>
    </section>
  )
}

export default PageHero
