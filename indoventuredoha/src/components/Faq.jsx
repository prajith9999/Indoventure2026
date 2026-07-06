import { Link } from 'react-router-dom'
import { FAQ_ITEMS } from '../data/faq'

function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__header">
          <p className="faq__label">Support</p>
          <h2 className="faq__title" id="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq__intro">
            Quick answers about our products, delivery, and how to work with
            INDOVENTURE Trading across Qatar.
          </p>
        </div>

        <div className="faq__list">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="faq__item">
              <summary className="faq__question">{item.question}</summary>
              <p className="faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="faq__cta">
          Still have questions?{' '}
          <Link to="/contact">Contact our sales team</Link>
        </p>
      </div>
    </section>
  )
}

export default Faq
