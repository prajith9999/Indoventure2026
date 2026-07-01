import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { IconProducts } from '../components/PageIcons'
import ProductPortfolio from '../components/ProductPortfolio'
import ProductCategories from '../components/ProductCategories'

function ProductsPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const target = document.querySelector(location.hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <div className="page">
      <PageHero
        icon={IconProducts}
        label="Product catalogue"
        title="Our products"
        description="Five core categories covering every operational need — from job site safety to electrical systems, civil consumables, hand tools, and facility supplies."
      />
      <ProductPortfolio />
      <ProductCategories />
    </div>
  )
}

export default ProductsPage
