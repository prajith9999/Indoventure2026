import { useState } from 'react'
import { SHOWCASE_ITEMS } from '../data/showcase'
import { CATEGORY_THEMES } from '../data/categoryThemes'
import CategoryIcon from './CategoryIcon'

function ProductShowcase() {
  return (
    <section className="showcase" aria-label="Product highlights">
      {SHOWCASE_ITEMS.map((item) => (
        <ShowcaseRow key={item.id} item={item} />
      ))}
    </section>
  )
}

function ShowcaseRow({ item }) {
  const theme = CATEGORY_THEMES[item.theme] || CATEGORY_THEMES.brand
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className={`showcase__row${item.reverse ? ' showcase__row--reverse' : ''}`}
    >
      <div
        className="showcase__content"
        style={{ background: theme.contentBg }}
      >
        <p className="showcase__category" style={{ color: theme.accent }}>
          {item.category}
        </p>
        <h3 className="showcase__title">{item.title}</h3>
        <p className="showcase__description">{item.description}</p>
        <a
          href={item.link}
          className="showcase__link"
          style={{ color: theme.accent }}
        >
          {item.linkLabel}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>

      <div
        className="showcase__media"
        style={{ background: theme.mediaBg }}
      >
        {!imgError ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="showcase__fallback">
            <CategoryIcon name={theme.icon} className="category-icon--showcase" />
          </div>
        )}
        <div className="showcase__overlay">
          <span
            className="showcase__overlay-label"
            style={{ borderColor: theme.accent, color: theme.accent }}
          >
            {item.category}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductShowcase
