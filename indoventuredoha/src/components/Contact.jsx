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
                Souq Umm Besher, Unit 3, Shop No. 12<br />
                Area 91, Street No. 295<br />
                Doha, Qatar
              </p>
            </div>
            <div className="contact__item">
              <span className="contact__label">Phone</span>
              <a href="tel:+97477409009">+974 7740 9009</a>
            </div>
            <div className="contact__item">
              <span className="contact__label">Email</span>
              <a href="mailto:sales@indoventure-trading.com">sales@indoventure-trading.com</a>
            </div>
          </div>
        </div>

        <div className="contact__aside" aria-label="Contact representative">
          <p className="contact__aside-label">Direct contact</p>
          <p className="contact__profile-name">Sooraj Sunil</p>
          <p className="contact__profile-role">Sales — Indoventure Trading</p>
          <p className="contact__profile-location">Doha, Qatar</p>

          <div className="contact__actions">
            <a href="tel:+97477409009" className="contact__action">
              Call +974 7740 9009
            </a>
            <a href="mailto:sales@indoventure-trading.com" className="contact__action">
              sales@indoventure-trading.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
