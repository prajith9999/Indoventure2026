const HIGHLIGHTS = [
  {
    title: 'Emerging markets need a different playbook',
    tag: 'Deep insight',
  },
  {
    title: 'Lessons from commodity cycles',
    tag: 'Market analysis',
  },
  {
    title: 'Data-powered trading review 2026',
    tag: 'Report',
    featured: true,
  },
  {
    title: 'From disruption to diffusion. Intelligence in motion.',
    tag: 'Innovation',
  },
  {
    title: 'The code for careers in trading',
    tag: 'Careers',
    subtitle: 'Job-ready skills for a more inclusive future',
  },
]

function Highlights() {
  return (
    <section className="highlights" id="insights">
      <div className="container">
        <h2 className="section-label">Highlights</h2>
        <div className="highlights__grid">
          {HIGHLIGHTS.map((item) => (
            <article
              key={item.title}
              className={`highlight-card${item.featured ? ' highlight-card--featured' : ''}`}
            >
              <span className="highlight-card__tag">{item.tag}</span>
              <h3 className="highlight-card__title">{item.title}</h3>
              {item.subtitle && (
                <p className="highlight-card__subtitle">{item.subtitle}</p>
              )}
              <a href="#read-more" className="highlight-card__link">
                Read more
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

export default Highlights
