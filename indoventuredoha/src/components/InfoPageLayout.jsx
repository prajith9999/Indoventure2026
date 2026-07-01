import { Link } from 'react-router-dom'
import PageHero from './PageHero'

function InfoPageLayout({ label, title, description, icon, sections, cta }) {
  return (
    <div className="page">
      <PageHero
        icon={icon}
        label={label}
        title={title}
        description={description}
      />

      <section className="info-page">
        <div className="container info-page__inner">
          {sections.map((section) => (
            <article key={section.title} className="info-page__block">
              <h2 className="info-page__heading">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="info-page__text">{paragraph}</p>
              ))}
              {section.list && (
                <ul className="info-page__list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          {cta && (
            <div className="info-page__cta">
              <Link to={cta.to} className="info-page__cta-btn">
                {cta.label}
              </Link>
              {cta.secondary && (
                <a href={cta.secondary.href} className="info-page__cta-link">
                  {cta.secondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default InfoPageLayout
