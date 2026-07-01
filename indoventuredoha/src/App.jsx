import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import WhoWeArePage from './pages/WhoWeArePage'
import MissionPage from './pages/MissionPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import InfoPage from './pages/InfoPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/our-mission" element={<MissionPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping-delivery" element={<InfoPage pageKey="shipping-delivery" />} />
          <Route path="/returns-policy" element={<InfoPage pageKey="returns-policy" />} />
          <Route path="/warranty" element={<InfoPage pageKey="warranty" />} />
          <Route path="/brochure" element={<InfoPage pageKey="brochure" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
