import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__content">
          <h2 className="contact__title">
            Get in touch with Indoventure Trading
          </h2>
          <p className="contact__lead">
            Ready to supply your next project? Thank you for your interest in
            INDOVENTURE Trading. We look forward to building a lasting
            partnership with you.
          </p>

          <div className="contact__details">
            <div className="contact__item">
              <span className="contact__label">Address</span>
              <p>
                Souq Umm Besher, Building 3, Shop No. 12<br />
                Area 91, Street No. 295<br />
                Doha, Qatar
              </p>
            </div>
            <div className="contact__item">
              <span className="contact__label">Phone</span>
              <a href="tel:+97477409009">+974 7740 9009</a>
            </div>
          </div>

          <Link to="/who-we-are" className="contact__about-link">
            More about us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
        </div>

        <div className="contact__aside" aria-label="Contact representatives">
          <article className="contact__card">
            <p className="contact__card-title">Sales</p>
            <p className="contact__card-desc">
              Product enquiries, quotes, and general sales support
            </p>
            <div className="contact__actions">
              <a href="tel:+97477409009" className="contact__action">
                Call +974 7740 9009
              </a>
              <a href="mailto:sales@indoventuretrading.com" className="contact__action">
                sales@indoventuretrading.com
              </a>
            </div>
          </article>

          <article className="contact__card">
            <p className="contact__card-title">Direct contact</p>
            <p className="contact__profile-name">Sooraj Sunil</p>
            <p className="contact__profile-role">Indoventure Trading</p>
            <p className="contact__profile-location">Doha, Qatar</p>
            <div className="contact__actions">
              <a href="tel:+97477409009" className="contact__action">
                Call +974 7740 9009
              </a>
              <a href="mailto:sooraj@indoventuretrading.com" className="contact__action">
                sooraj@indoventuretrading.com
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
