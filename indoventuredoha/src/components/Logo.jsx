function Logo({ className = '' }) {
  return (
    <div className={`logo ${className}`}>
      <img src="/logo-icon.png" alt="" className="logo__icon" aria-hidden="true" />
      <div className="logo__text">
        <span className="logo__name">INDOVENTURE</span>
        <span className="logo__sub">Trading</span>
      </div>
    </div>
  )
}

export default Logo
