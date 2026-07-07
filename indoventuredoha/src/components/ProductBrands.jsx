import { SUPPLIER_BRANDS } from '../data/brands'

function ProductBrands() {
  return (
    <section className="product-brands" aria-label="Trusted supplier brands">
      <div className="container">
        <div className="product-brands__header">
          <p className="product-brands__label">Authorized supply</p>
          <h2 className="product-brands__title">Trusted brands we supply</h2>
          <p className="product-brands__intro">
            INDOVENTURE sources and distributes products from leading global
            manufacturers — ensuring certified quality, genuine parts, and
            reliable performance for every project across Qatar.
          </p>
        </div>

        <ul className="product-brands__logos">
          {SUPPLIER_BRANDS.map((brand) => (
            <li
              key={brand.name}
              className={`product-brands__logo-item${brand.wide ? ' product-brands__logo-item--wide' : ''}${brand.lockup ? ' product-brands__logo-item--lockup' : ''}`}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className={`product-brands__logo${brand.wide ? ' product-brands__logo--wide' : ''}${brand.lockup ? ' product-brands__logo--lockup' : ''}`}
                loading="lazy"
                decoding="async"
              />
              <p className="product-brands__logo-name">{brand.name}</p>
              {brand.detail ? (
                <p className="product-brands__logo-detail">{brand.detail}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProductBrands
