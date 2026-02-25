import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'about',    label: 'About' },
    { id: 'skills',   label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact',  label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        {/* Logo */}
        <div className="nav-logo">Sohan Singh</div>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={active === id ? 'active' : ''}
              >
                {label}
                <span className="nav-underline" />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Sign Up */}
        <a href="#contact" className="nav-signup" onClick={() => scrollTo('contact')}>
          Sign Up
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}>
        <ul>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={active === id ? 'active' : ''}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-signup mobile-signup" onClick={() => { scrollTo('contact'); setMenuOpen(false); }}>
          Sign Up
        </a>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;