import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductShowcase from '../components/ProductShowcase'
import ProductPortfolio from '../components/ProductPortfolio'
import ProductCategories from '../components/ProductCategories'
import Faq from '../components/Faq'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const target = document.querySelector(location.hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return (
    <>
      <Hero />
      <ProductShowcase />
      <ProductPortfolio />
      <ProductCategories />
      <Faq />
    </>
  )
}

export default HomePage
