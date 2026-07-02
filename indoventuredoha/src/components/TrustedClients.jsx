import { TRUSTED_CLIENTS } from '../data/clients'

function TrustedClients() {
  return (
    <section className="trusted-clients" aria-label="Trusted clients and partners">
      <div className="container">
        <div className="trusted-clients__header">
          <p className="trusted-clients__label">Our clients</p>
          <h2 className="trusted-clients__title">Trusted by leading organizations</h2>
          <p className="trusted-clients__intro">
            INDOVENTURE proudly supplies major energy, construction, hospitality,
            and trading partners across Qatar — delivering reliable products and
            service on every project.
          </p>
        </div>

        <ul className="trusted-clients__logos">
          {TRUSTED_CLIENTS.map((client) => (
            <li
              key={client.name}
              className={`trusted-clients__logo-item${client.tall ? ' trusted-clients__logo-item--tall' : ''}`}
            >
              <div className={`client-brand ${client.brandClass}`} aria-label={client.name}>
                {client.lines.map((line) => (
                  <span
                    key={line.text}
                    className={`client-brand__line client-brand__line--${line.type}`}
                  >
                    {line.text}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TrustedClients
