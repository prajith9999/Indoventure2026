const PROMOS = [
  {
    title: 'Discover our 2025 Integrated Annual Report',
    subtitle:
      'Indoventure Trading is a global leader in business and market transformation, powered by intelligence.',
    cta: 'Discover more',
    dark: true,
  },
  {
    title: 'Transforming markets',
    subtitle:
      'Bringing expertise and passion for innovation and technology to commodities, forex, and global trade.',
    cta: 'Discover more',
  },
  {
    title: 'Indoventure Research Institute',
    subtitle: '#1 in market intelligence — an industry first.',
    cta: 'Take a closer look',
  },
  {
    title: 'Indoventure Advisory',
    subtitle: 'Our powerhouse of innovation, design and transformation.',
    cta: 'Find out more',
  },
]

function PromoCards() {
  return (
    <section className="promo-cards">
      <div className="container">
        <div className="promo-cards__grid">
          {PROMOS.map((promo) => (
            <article
              key={promo.title}
              className={`promo-card${promo.dark ? ' promo-card--dark' : ''}`}
            >
              <h3 className="promo-card__title">{promo.title}</h3>
              <p className="promo-card__subtitle">{promo.subtitle}</p>
              <a href="#discover" className="promo-card__cta">
                {promo.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoCards
