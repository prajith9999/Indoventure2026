const INSIGHTS = [
  {
    type: 'Report',
    title: 'World Wealth Report 2026',
    image: 'linear-gradient(135deg, #002e6d 0%, #5dade2 100%)',
  },
  {
    type: 'Report',
    title: 'Reindustrialization 2026',
    image: 'linear-gradient(135deg, #1a1a2e 0%, #0070b8 100%)',
  },
  {
    type: 'Conversations for tomorrow',
    title: 'Owning the network: Why sovereignty is the next frontier for telecoms',
    image: 'linear-gradient(135deg, #0d2137 0%, #00d4ff 60%)',
  },
  {
    type: 'Report',
    title: 'Reindustrialization of Europe and US 2026',
    image: 'linear-gradient(135deg, #002e6d 0%, #0070b8 100%)',
  },
]

function Insights() {
  return (
    <section className="insights">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest insights</h2>
          <a href="#more-insights" className="section-link">More insights</a>
        </div>
        <div className="insights__grid">
          {INSIGHTS.map((item) => (
            <article key={item.title} className="insight-card">
              <div
                className="insight-card__image"
                style={{ background: item.image }}
                aria-hidden="true"
              />
              <div className="insight-card__body">
                <span className="insight-card__type">{item.type}</span>
                <h3 className="insight-card__title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insights
