import PageHero from '../components/PageHero'
import ContentSlider from '../components/ContentSlider'
import { IconCompany } from '../components/PageIcons'
import { WHO_WE_ARE_SLIDES, WHO_WE_ARE_INDUSTRIES } from '../data/pageContent'

function WhoWeArePage() {
  return (
    <div className="page">
      <PageHero
        icon={IconCompany}
        label="About Indoventure"
        title="Who we are"
        description="A trusted trading and supply partner for industries across Qatar — delivering quality products with reliability and integrity."
      />
      <ContentSlider slides={WHO_WE_ARE_SLIDES} />

      <section className="page-section page-section--light">
        <div className="container">
          <h2 className="page-section__title">Sectors we support</h2>
          <p className="page-section__lead">
            We supply certified products and consumables across the sectors that
            drive Qatar&apos;s economy — from major infrastructure projects to
            day-to-day facility operations.
          </p>
          <ul className="page-section__grid">
            {WHO_WE_ARE_INDUSTRIES.map((industry) => (
              <li key={industry} className="page-section__card">
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default WhoWeArePage
