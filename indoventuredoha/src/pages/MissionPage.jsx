import PageHero from '../components/PageHero'
import ContentSlider from '../components/ContentSlider'
import { IconMission } from '../components/PageIcons'
import { MISSION_SLIDES } from '../data/pageContent'

function MissionPage() {
  return (
    <div className="page">
      <PageHero
        icon={IconMission}
        label="Our purpose"
        title="Our mission"
        description="Delivering excellence in safety, electrical, and industrial supply — with integrity, reliability, and a commitment to lasting partnerships."
      />
      <ContentSlider slides={MISSION_SLIDES} />

      <section className="page-section page-section--accent">
        <div className="container page-section__quote">
          <blockquote>
            &ldquo;We measure success not only by what we deliver, but by the
            trust our clients place in us — project after project.&rdquo;
          </blockquote>
          <cite>— Indoventure Trading, Doha</cite>
        </div>
      </section>
    </div>
  )
}

export default MissionPage
