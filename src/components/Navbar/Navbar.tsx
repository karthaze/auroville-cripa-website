import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navLinks } from '../../data/navigation';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollPosition(40);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav__inner">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            <img src="/images/logo.png" alt="The Auroville Theatre Group" className="nav__logo-img" />
            <span className="nav__logo-text">The Auroville Theatre Group</span>
          </Link>

          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.path}
                  className={`nav__link${isActive(link.path) ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`nav__burger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                to={link.path}
                className="mobile-menu__link"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
