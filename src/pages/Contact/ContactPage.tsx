import { useState, type FormEvent } from 'react';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Button } from '../../components/Button/Button';
import './ContactPage.css';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <SectionHeader label="Contact" title="Join the Story" />
          <div className="contact__grid">
            <div>
              <h3 className="contact__heading">Visit Us</h3>
              <div className="contact__detail">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong>The Auroville Theatre Group — Kalabhumi</strong>
                  <br />
                  Auroville, Tamil Nadu 605101, India
                </div>
              </div>
              <div className="contact__detail">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:theatre@auroville.org.in">theatre@auroville.org.in</a>
              </div>
              <div className="contact__av">
                <p>
                  The Auroville Theatre Group is a project of <strong>SAIIER</strong> — Sri Aurobindo
                  International Institute of Educational Research.
                </p>
                <Button
                  variant="outline-dark"
                  href="https://auroville.org"
                  style={{ fontSize: '0.78rem', padding: '0.5rem 1rem' }}
                >
                  Visit Auroville →
                </Button>
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="fg">
                <label htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  type="text"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="fg">
                <label htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  type="email"
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="fg">
                <label htmlFor="c-subj">Subject</label>
                <select id="c-subj">
                  <option>General Inquiry</option>
                  <option>Auditions</option>
                  <option>Workshops</option>
                  <option>Visiting Us</option>
                  <option>Collaboration</option>
                </select>
              </div>
              <div className="fg">
                <label htmlFor="c-msg">Message</label>
                <textarea
                  id="c-msg"
                  required
                  placeholder="Tell us about your interest in theatre..."
                />
              </div>
              <Button
                variant={submitted ? 'olive' : 'red'}
                type="submit"
              >
                {submitted ? 'Sent ✓' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
