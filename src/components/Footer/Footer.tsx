import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <img src="/images/logo.png" alt="The Auroville Theatre Group" className="footer__logo" />
          <p className="footer__name">The Auroville Theatre Group</p>
          <p className="footer__sub">Centre for Research in the Performing Arts</p>
          <p className="footer__addr">
            Kalabhumi, Auroville<br />
            Tamil Nadu 605101, India
          </p>
        </div>

        <div className="footer__col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/productions">Productions</Link>
          <Link to="/philosophy">Philosophy</Link>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/director">The Director</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://auroville.org" target="_blank" rel="noopener noreferrer">
            Auroville.org
          </a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="mailto:theatre@auroville.org.in">theatre@auroville.org.in</a>
          <p className="footer__saiier">
            A project of SAIIER — Sri Aurobindo International Institute of Educational Research
          </p>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2025 The Auroville Theatre Group</p>
        </div>
      </div>
    </footer>
  );
}
