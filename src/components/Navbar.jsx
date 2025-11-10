import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full flex justify-end items-center py-6 px-8 fixed top-0 z-[999] font-oswald">
      <ul className="flex items-center gap-4 text-white text-sm uppercase tracking-wider font-medium">
        {navLinks.map((link, index) => (
          <li key={link.id} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <a
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`transition-all duration-300 ${
                active === link.id ? 'underline' : 'hover:underline'
              }`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
