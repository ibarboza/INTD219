'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: '56px',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: scrolled ? 'rgba(252,252,252,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
  };

  const brandStyle: React.CSSProperties = {
    fontFamily: 'var(--font-archivo)',
    fontWeight: 700,
    fontSize: '13px',
    color: 'var(--teal)',
    textDecoration: 'none',
  };

  const navLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-dmsans)',
    fontSize: '13px',
    color: 'rgba(17,75,95,0.45)',
    textDecoration: 'none',
  };

  const contactLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-dmsans)',
    fontSize: '13px',
    color: 'var(--plum)',
    textDecoration: 'underline',
    textDecorationColor: 'var(--plum)',
  };

  const desktopLinksStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  };

  const hamburgerStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '4px',
  };

  const barStyle: React.CSSProperties = {
    width: '22px',
    height: '2px',
    background: 'var(--teal)',
    display: 'block',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex: 49,
    background: 'var(--white)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
  };

  const overlayLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-archivo)',
    fontWeight: 700,
    fontSize: '48px',
    color: 'var(--teal)',
    textDecoration: 'none',
  };

  const overlayContactStyle: React.CSSProperties = {
    fontFamily: 'var(--font-archivo)',
    fontWeight: 700,
    fontSize: '48px',
    color: 'var(--plum)',
    textDecoration: 'underline',
    textDecorationColor: 'var(--plum)',
  };

  return (
    <>
      <nav style={navStyle}>
        <Link href="/" style={brandStyle}>
          Ignacio Barboza
        </Link>

        <div className="hidden md:flex" style={desktopLinksStyle}>
          <Link href="/#work" style={navLinkStyle}>Work</Link>
          <Link href="/about" style={navLinkStyle}>About</Link>
          <a href="mailto:barbozaignacio@hotmail.com" style={contactLinkStyle}>
            Get in touch
          </a>
        </div>

        <button
          className="flex md:hidden"
          style={hamburgerStyle}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span style={barStyle} />
          <span style={barStyle} />
          <span style={barStyle} />
        </button>
      </nav>

      {menuOpen && (
        <div style={overlayStyle}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '18px',
              right: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-archivo)',
              fontWeight: 700,
              fontSize: '24px',
              color: 'var(--teal)',
            }}
            aria-label="Close menu"
          >
            ✕
          </button>
          <Link href="/" style={overlayLinkStyle} onClick={() => setMenuOpen(false)}>
            Ignacio Barboza
          </Link>
          <Link href="/#work" style={overlayLinkStyle} onClick={() => setMenuOpen(false)}>
            Work
          </Link>
          <Link href="/about" style={overlayLinkStyle} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a
            href="mailto:barbozaignacio@hotmail.com"
            style={overlayContactStyle}
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </>
  );
}
