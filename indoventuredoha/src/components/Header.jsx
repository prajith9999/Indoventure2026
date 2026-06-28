import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const NAV_ITEMS = [
  { label: 'Who We Are', to: '/who-we-are' },
  { label: 'Our Mission', to: '/#mission' },
  { label: 'Products', to: '/#products' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__utility">
        <div className="header__utility-inner">
          <a href="tel:+97477409009">+974 7740 9009</a>
          <a href="mailto:sales@indoventure-trading.com">sales@indoventure-trading.com</a>
        </div>
      </div>

      <div className="header__main">
        <Link to="/" className="header__logo" aria-label="Indoventure Trading home">
          <Logo />
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={location.pathname === item.to ? 'header__nav-link--active' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Link to="/contact" className="header__cta">Get in Touch</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
