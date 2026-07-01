import { useCallback, useEffect, useState } from 'react'

function ContentSlider({ slides, autoPlayMs = 7000 }) {
  const [active, setActive] = useState(0)
  const total = slides.length

  const goTo = useCallback(
    (index) => {
      setActive((index + total) % total)
    },
    [total],
  )

  useEffect(() => {
    if (total <= 1 || !autoPlayMs) return undefined

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total)
    }, autoPlayMs)

    return () => window.clearInterval(timer)
  }, [autoPlayMs, total])

  return (
    <section className="content-slider" aria-label="Page highlights">
      <div className="container">
        <div className="content-slider__header">
          <div className="content-slider__nav">
            <button
              type="button"
              className="content-slider__arrow"
              onClick={() => goTo(active - 1)}
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="content-slider__arrow"
              onClick={() => goTo(active + 1)}
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="content-slider__viewport">
          <div
            className="content-slider__track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide) => {
              const SlideIcon = slide.icon
              return (
                <article key={slide.title} className="content-slider__slide">
                  <div className="content-slider__slide-icon">
                    <SlideIcon className="content-slider__icon" />
                  </div>
                  <div className="content-slider__slide-body">
                    <span className="content-slider__step">{slide.step}</span>
                    <h2 className="content-slider__title">{slide.title}</h2>
                    <p className="content-slider__text">{slide.text}</p>
                    {slide.points && (
                      <ul className="content-slider__points">
                        {slide.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="content-slider__dots" role="tablist" aria-label="Slide navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              role="tab"
              className={`content-slider__dot${index === active ? ' content-slider__dot--active' : ''}`}
              aria-selected={index === active}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentSlider
