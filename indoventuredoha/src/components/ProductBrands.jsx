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
            <li key={brand.name} className="product-brands__logo-item">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="product-brands__logo"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProductBrands
