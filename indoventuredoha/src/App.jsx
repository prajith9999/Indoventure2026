import Header from './components/Header'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Mission from './components/Mission'
import ProductPortfolio from './components/ProductPortfolio'
import ProductShowcase from './components/ProductShowcase'
import ProductCategories from './components/ProductCategories'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Mission />
        <ProductShowcase />
        <ProductPortfolio />
        <ProductCategories />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
