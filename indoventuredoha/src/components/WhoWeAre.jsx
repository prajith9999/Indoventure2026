const INDUSTRIES = [
  'Construction Materials, tools & consumables',
  'Oil & Gas',
  'Safety & industrial supplies',
  'Manufacturing',
  'Electrical & hand tools',
  'Hospitality',
  'Facility & consumable products',
]

function WhoWeAre() {
  return (
    <section className="who-we-are" id="who-we-are">
      <div className="container">
        <h2 className="section-title">Who we are</h2>
        <p className="who-we-are__intro">
          INDOVENTURE Trading is a trusted supply partner for industries across
          Qatar. We specialize in sourcing, importing, and distributing a
          comprehensive range of products — ensuring our clients receive the best
          solutions for their operational needs.
        </p>
        <ul className="who-we-are__industries">
          {INDUSTRIES.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhoWeAre
