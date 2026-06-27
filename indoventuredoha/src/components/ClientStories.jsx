const STORIES = [
  {
    title: 'Regional distributor scales cross-border trade with Indoventure',
    description:
      'Indoventure supports the development of an integrated trading platform to ensure accurate market positioning and risk management.',
  },
  {
    title: 'Energy portfolio recharged with fresh strategy and new direction',
    description:
      'When success reaches its limits, a bold new direction reignites the future of commodity trading.',
  },
  {
    title: 'Fintech creates a virtual twin of its trading operations',
    description:
      'With Indoventure support, the company has extended its use of real-time analytics by integrating market data, execution processes, and compliance systems throughout the trade lifecycle.',
  },
]

function ClientStories() {
  return (
    <section className="client-stories" id="services">
      <div className="container">
        <h2 className="section-title">Recent client stories</h2>
        <div className="client-stories__grid">
          {STORIES.map((story) => (
            <article key={story.title} className="story-card">
              <h3 className="story-card__title">{story.title}</h3>
              <p className="story-card__desc">{story.description}</p>
              <a href="#read-more" className="story-card__link">
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

export default ClientStories
