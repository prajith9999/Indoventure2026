import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const NAV_ITEMS = [
  { label: 'Who We Are', to: '/who-we-are' },
  { label: 'Our Mission', to: '/our-mission' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}>
      <div className="header__utility">
        <div className="header__utility-inner">
          <a href="tel:+97477409009">+974 7740 9009</a>
          <a href="mailto:sales@indoventuretrading.com">sales@indoventuretrading.com</a>
        </div>
      </div>

      <div className="header__main">
        <Link to="/" className="header__logo" aria-label="Indoventure Trading home">
          <Logo />
        </Link>

        <nav
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
          aria-label="Main navigation"
          id="site-nav"
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={location.pathname === item.to.split('#')[0] ? 'header__nav-link--active' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="header__nav-cta" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Link>
        </nav>

        <div className="header__actions">
          <Link to="/contact" className="header__cta">Get in Touch</Link>
          <button
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="header__menu-icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="header__backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header
