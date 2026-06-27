import { useEffect, useState } from 'react'
import Logo from './Logo'

const NAV_ITEMS = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__utility">
        <div className="header__utility-inner">
          <a href="tel:+97477409009">+974 7740 9009</a>
          <a href="mailto:sales@indoventuretrading.com">sales@indoventuretrading.com</a>
        </div>
      </div>

      <div className="header__main">
        <a href="#" className="header__logo" aria-label="Indoventure Trading home">
          <Logo />
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#contact" className="header__cta">Get in Touch</a>
        </div>
      </div>
    </header>
  )
}

export default Header
