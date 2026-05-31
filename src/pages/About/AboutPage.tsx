import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import './AboutPage.css';

export function AboutPage() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <SectionHeader label="About" title="The Story" />
          <div className="about__grid">
            <div className="about__text">
              <p>
                The Auroville Theatre Group has been performing in Auroville for over{' '}
                <strong>30 years</strong> — a journey of transformation, discovery, and
                the relentless pursuit of artistic truth.
              </p>
              <p>
                Many actors have come and gone; several have started their stage careers
                with ATG. The theatre scene in Auroville being fluid — actors work with
                more than one company, move from show to show. One thing has remained
                constant: <em>Jill Navarre</em>, ATG Artistic Director.
              </p>
              <p>
                The scripts are chosen for their beauty of language and depth of
                expression. We always ask:{' '}
                <strong>&ldquo;What does this story mean to us, here, now?&rdquo;</strong>
              </p>
              <p>
                The plays should have relevance to the Auroville experience — its
                multicultural, international aspect, connected to what Auroville is all
                about: an expression of the search for human unity, its triumphs as well
                as its failures, man's aspiration for progress, the evolution of
                consciousness, unity in diversity, our connection with the Divine.
              </p>
              <p>
                The Auroville Theatre Group — the Centre for Research in the Performing Arts — is located in
                Kalabhumi, Auroville. It serves as a research hub and performance space,
                a project of SAIIER (Sri Aurobindo International Institute of Educational
                Research).
              </p>
            </div>
            <div>
              <div className="about__img">
                <img src="/images/gallery-rehearsal.png" alt="Rehearsal at The Auroville Theatre Group" />
              </div>
              <p className="about__caption">
                <span className="about__badge">ATG</span> A project of SAIIER — Sri
                Aurobindo International Institute of Educational Research
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
