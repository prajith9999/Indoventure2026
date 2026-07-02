import { PORTFOLIO_CATEGORIES } from '../data/products'
import { CATEGORY_THEMES } from '../data/categoryThemes'
import CategoryIcon from './CategoryIcon'
import ProductBrands from './ProductBrands'
import TrustedClients from './TrustedClients'

function ProductPortfolio() {
  return (
    <>
    <section className="portfolio" id="products">
      <div className="container">
        <h2 className="section-title">Our product portfolio</h2>
        <p className="portfolio__intro">
          Five core categories covering every operational need — from job site to
          facility.
        </p>
        <div className="portfolio__grid">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const theme = CATEGORY_THEMES[cat.num]
            return (
              <a key={cat.num} href={`#category-${cat.num}`} className="portfolio-card">
                <div
                  className="portfolio-card__accent"
                  style={{ background: theme.gradient }}
                >
                  <CategoryIcon name={theme.icon} className="category-icon--lg" />
                </div>
                <div className="portfolio-card__body">
                  <span className="portfolio-card__num" style={{ color: theme.color }}>
                    Category {cat.num}
                  </span>
                  <h3 className="portfolio-card__title">{cat.title}</h3>
                  <p className="portfolio-card__summary">{cat.summary}</p>
                  <span className="portfolio-card__link" style={{ color: theme.color }}>
                    View details
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
    <ProductBrands />
    <TrustedClients />
    </>
  )
}

export default ProductPortfolio
