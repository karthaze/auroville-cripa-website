import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { timelineItems } from '../../data/timeline';
import './DirectorPage.css';

export function DirectorPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <SectionHeader label="The Director" title="Jill Navarre" />
          <div className="dir__grid">
            <div>
              <p className="dir__role">
                Artistic Director · Playwright · Screenwriter
              </p>
              <div className="dir__bio">
                <p>
                  Born in New Orleans, raised in Brooklyn — Jill's journey to Auroville
                  is a story of artistic destiny. A poet turned playwright, she discovered
                  theatre &ldquo;for a lark&rdquo; while pursuing her Master's in English,
                  and never looked back.
                </p>
                <p>
                  In Washington D.C., she co-founded the{' '}
                  <strong>Sanctuary Theatre</strong>, presenting cross-cultural,
                  inter-racial, avant-garde work. She won awards for directing (
                  <em>Rivers of Blood</em>, First Prize, Source Theatre Festival) and
                  playwriting (<em>The Cradle Will Fall</em>, First Prize, D.C. Arts
                  Council Larry Neal Award).
                </p>
                <p>
                  In 1987, a backpacking trip brought her to Auroville — &ldquo;an
                  international community dedicated to human unity and peace.&rdquo; She
                  returned in 1991, and has been{' '}
                  <strong>Artistic Director of ATG since 1992</strong>.
                </p>
                <p>
                  In 2003, she was awarded a Government of India Development Scheme grant
                  for directing <em>Milarepa</em>.
                </p>
              </div>
            </div>

            <div>
              <h4 className="tl-title">A Life in Theatre</h4>
              <div className="tl">
                {timelineItems.map((item, i) => (
                  <div
                    className={`tl__item${item.highlight ? ' tl__item--hl' : ''}`}
                    key={i}
                  >
                    <span className="tl__yr">{item.year}</span>
                    <span className="tl__ev">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
