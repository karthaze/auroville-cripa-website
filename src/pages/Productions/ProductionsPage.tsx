import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { featuredProductions, completeWorks } from '../../data/productions';
import './ProductionsPage.css';

export function ProductionsPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <SectionHeader label="Programme" title="The Repertoire" />
          <p className="prod-intro">
            From Beckett to Tagore, Shakespeare to Schmitt — three decades of stories
            that search for meaning.
          </p>

          <div className="prod-grid">
            {featuredProductions.map((prod) => (
              <div className="prod-card" key={prod.title}>
                <div className="prod-card__img">
                  <img src={prod.image} alt={prod.title} />
                </div>
                <div className="prod-card__body">
                  <p className="prod-card__year">{prod.year}</p>
                  <h3 className="prod-card__title">{prod.title}</h3>
                  <p className="prod-card__author">{prod.author}</p>
                  {prod.description && (
                    <p className="prod-card__desc">{prod.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="prod-list">
            <h3>Complete Works</h3>
            <ul>
              {completeWorks.map((work, i) => (
                <li key={i}>
                  <span className="prod-list__year">{work.year}</span>
                  {work.title} — <em>{work.author}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
