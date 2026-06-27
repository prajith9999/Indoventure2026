const NEWS = [
  {
    date: 'Jun 25, 2026',
    category: 'Reports',
    title:
      'AI accelerates commodity demand, prompting a new wave of market adaptation and investment',
    excerpt:
      'The rapid expansion of AI-driven trading is not only increasing market volatility, but making it significantly harder to predict, challenging how portfolios are planned and delivered.',
  },
  {
    date: 'Jun 11, 2026',
    category: 'Partners',
    title: 'Indoventure becomes first to receive sovereign trading partner designation',
  },
  {
    date: 'Jun 4, 2026',
    category: 'Reports',
    title: 'Global millionaire population jumps by nearly 2 million in 2025',
  },
  {
    date: 'Jun 3, 2026',
    category: 'Client news',
    title: 'Syensqo selects Indoventure for multi-year data transformation',
  },
]

function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest news</h2>
          <a href="#all-news" className="section-link">See all news</a>
        </div>
        <div className="news__list">
          {NEWS.map((item, i) => (
            <article key={item.title} className={`news-item${i === 0 ? ' news-item--featured' : ''}`}>
              <div className="news-item__meta">
                <span className="news-item__category">{item.category}</span>
                <time className="news-item__date">{item.date}</time>
              </div>
              <h3 className="news-item__title">{item.title}</h3>
              {item.excerpt && <p className="news-item__excerpt">{item.excerpt}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
