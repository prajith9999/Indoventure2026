import { PORTFOLIO_CATEGORIES } from '../data/products'
import { CATEGORY_THEMES } from '../data/categoryThemes'
import CategoryIcon from './CategoryIcon'

function ProductCategories() {
  return (
    <section className="categories">
      <div className="container">
        {PORTFOLIO_CATEGORIES.map((cat) => {
          const theme = CATEGORY_THEMES[cat.num]
          return (
            <article key={cat.num} className="category-block" id={`category-${cat.num}`}>
              <div
                className="category-block__banner"
                style={{ background: theme.gradient }}
              >
                <CategoryIcon name={theme.icon} className="category-icon--banner" />
                <div className="category-block__banner-text">
                  <span className="category-block__num">Category {cat.num}</span>
                  <h3 className="category-block__title">{cat.title}</h3>
                </div>
              </div>

              <div className="category-block__header">
                <p className="category-block__desc">{cat.description}</p>
              </div>

              {cat.groups && (
                <div className="category-block__groups">
                  {cat.groups.map((group) => (
                    <div
                      key={group.name}
                      className="category-group"
                      style={{ borderLeftColor: theme.color }}
                    >
                      <h4 className="category-group__name">{group.name}</h4>
                      <p className="category-group__items">{group.items}</p>
                    </div>
                  ))}
                </div>
              )}

              {cat.items && (
                <ul className="category-block__list">
                  {cat.items.map((item) => (
                    <li key={item} style={{ borderLeftColor: theme.color }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ProductCategories
