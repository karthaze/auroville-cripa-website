import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import './PhilosophyPage.css';

export function PhilosophyPage() {
  return (
    <div className="page phil-page">
      <section className="phil-section">
        <div className="phil__bg">
          <img src="/images/gallery-stage.png" alt="" />
          <div className="phil__bg-ov" />
        </div>
        <div className="phil__inner container">
          <SectionHeader label="Philosophy" title="The Heart" light goldDivider />

          <div className="phil__quote">
            <blockquote>
              <p>
                &ldquo;Theatre is about <em>transformation</em>. It is about finding
                yourself and touching the deepest part of yourself in order to offer it
                up to the Divine, to the audience.
              </p>
              <p>
                You are there for them — you are enacting this miracle of{' '}
                <em>transformation</em> for them.
              </p>
              <p>
                And how do we open our hearts to allow this transformation to take place?
                We use the strongest power that we know — <em>the power of love</em>
                .&rdquo;
              </p>
            </blockquote>
            <cite className="phil__cite">— Jill Navarre, Artistic Director</cite>
          </div>

          <div className="phil__extended">
            <p>
              &ldquo;What is this love? It is the love which can change you, open you,
              widen you, clean you, make you strong. It gives you a voice, two arms, two
              legs, a strong, flexible, responsive, energized, dynamic body and most of
              all, a heart.&rdquo;
            </p>
            <p>
              &ldquo;We are here — not just in Auroville, but all of us, here on earth —
              to make it happen, to allow the spirit to work in the world. And we can do
              it. We must do it — together.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
