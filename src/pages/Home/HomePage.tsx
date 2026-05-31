import { useState, useEffect } from 'react';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Button } from '../../components/Button/Button';
import { featuredProductions } from '../../data/productions';
import './HomePage.css';

const heroImages = [

  '/images/hero-bg-2.jpg',

];

export function HomePage() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="/images/hero-bg-2.jpg"
            alt=""
            className={'hero__bg-img active'}
          />
        </div>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <h1 className="hero__title">The Auroville <span className="hero__shimmer">Theatre</span> Group</h1>
          <p className="hero__subtitle">
            Centre for Research in the Performing Arts · Auroville
          </p>
          <p className="hero__desc">
            For over 30 years, Auroville's home for the performing arts — where
            cultures meet, stories unfold, and the human spirit finds its voice.
          </p>
          <div className="hero__btns">
            <Button variant="red" to="/productions">
              Our Productions
            </Button>
            <Button variant="outline" to="/about">
              The Story
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ HIGHLIGHTS ═══ */}
      <section className="highlights">
        <div className="highlights__bg">
          <img src="/images/gallery-rehearsal.png" alt="" />
          <div className="highlights__bg-ov" />
        </div>
        <div className="highlights__inner container">
          <SectionHeader label="Featured Works" title="From the Repertoire" light goldDivider />
          <div className="highlights__grid">
            {featuredProductions.slice(0, 3).map((prod) => (
              <div className="highlight-card" key={prod.title}>
                <div className="highlight-card__img">
                  <img src={prod.image} alt={prod.title} />
                </div>
                <div className="highlight-card__body">
                  <p className="highlight-card__tag">{prod.year}</p>
                  <h3 className="highlight-card__title">{prod.title}</h3>
                  <p className="highlight-card__sub">{prod.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="home-quote">
        <p className="home-quote__text">
          &ldquo;Theatre is about <em>transformation</em> — finding yourself and
          touching the deepest part of yourself in order to offer it up to the
          audience.&rdquo;
        </p>
        <p className="home-quote__author">— Jill Navarre, Artistic Director</p>
      </section>
    </div>
  );
}
