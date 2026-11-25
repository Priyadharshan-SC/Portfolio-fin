import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      const scrollPos = window.scrollY + 140;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Publications', href: '#publications', id: 'publications' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
  ];

  return (
    <header id="header" className="sticky top-0 z-50 p-4">
      <div className="container mx-auto">
        <nav className="bg-elephant-grey backdrop-blur-sm rounded-full shadow-lg flex justify-between items-center p-2">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 pl-4">
            <span className="bg-amber-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
              P
            </span>
            <span className="font-bold text-2xl text-slate-100 hidden sm:inline">
              Priyadharshan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`nav-link transition-colors px-3 py-2 border-b-2 ${
                    isActive
                      ? 'text-amber-500 border-amber-500'
                      : 'text-slate-300 hover:text-amber-500 border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-white hover:bg-slate-200 text-elephant-grey font-semibold py-2.5 px-6 rounded-full transition-colors mr-2"
          >
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-2">
            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 focus:outline-none p-1"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed top-24 left-6 right-6 z-40 bg-elephant-grey rounded-lg shadow-lg p-4 transition-all"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${
                activeSection === link.id
                  ? 'text-amber-500 font-bold'
                  : 'text-slate-300 hover:text-amber-500'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-3 bg-white hover:bg-slate-200 text-elephant-grey font-semibold py-2 px-6 rounded-full transition-colors"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}

