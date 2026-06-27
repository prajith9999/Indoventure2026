const VALUES = [
  {
    title: 'Quality first',
    text: 'Every product meets international standards',
  },
  {
    title: 'Customer-centric',
    text: 'Tailored solutions for every client',
  },
  {
    title: 'Integrity & reliability',
    text: 'On-time delivery, every time',
  },
]

function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="container">
        <h2 className="section-title section-title--light">Our mission</h2>
        <p className="mission__statement">
          To deliver high-quality safety, electrical, and industrial products
          with reliability, integrity, and excellence — building lasting
          partnerships through value, trust, and timely service.
        </p>
        <div className="mission__values">
          {VALUES.map((value) => (
            <article key={value.title} className="value-card">
              <h3 className="value-card__title">{value.title}</h3>
              <p className="value-card__text">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
