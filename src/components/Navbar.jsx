import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'sobre' },
    { id: 3, link: 'serviços' },
    { id: 4, link: 'contato' },
  ];

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white/80 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
  } rounded-b-2xl px-6`;

  const linkColor = scrolled ? 'text-primary' : 'text-white';

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
        <h1 className={`text-3xl font-bold ${linkColor}`}>Dr. João Silva</h1>

        <div className="hidden md:flex items-center space-x-8">
          {isHomePage && (
            <ul className="flex space-x-8">
              {links.map(({ id, link }) => (
                <li key={id} className={`cursor-pointer capitalize font-medium hover:scale-105 duration-200 ${linkColor}`}>
                  <ScrollLink to={link} smooth duration={500}>
                    {link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          )}
          
          <RouterLink 
            to="/login"
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            <FaUser />
            <span>Login</span>
          </RouterLink>
        </div>

        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          {nav ? <FaTimes size={30} className={linkColor} /> : <FaBars size={30} className={linkColor} />}
        </div>

        {nav && (
          <div className="fixed inset-0 bg-white/90 backdrop-blur-lg z-50">
            <ul className="h-screen flex flex-col justify-center items-center">
              {isHomePage && links.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-primary">
                  <ScrollLink onClick={() => setNav(false)} to={link} smooth duration={500}>
                    {link}
                  </ScrollLink>
                </li>
              ))}
              <li className="px-4 py-6">
                <RouterLink
                  to="/login"
                  onClick={() => setNav(false)}
                  className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full"
                >
                  <FaUser />
                  <span>Login</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
