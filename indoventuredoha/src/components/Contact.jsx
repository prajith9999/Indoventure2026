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

        <div className="contact__card">
          <p className="contact__card-thanks">Thank you</p>
          <h3 className="contact__card-title">
            Get in touch with us
          </h3>
          <p className="contact__card-sub">
            Indoventure Trading — Doha, Qatar
          </p>
          <a href="tel:+97477409009" className="contact__card-cta">
            Call +974 7740 9009
          </a>
          <a href="mailto:sales@indoventure-trading.com" className="contact__card-cta contact__card-cta--outline">
            Send an email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
