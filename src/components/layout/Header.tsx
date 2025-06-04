import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, CloudLightning, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-storm-800/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white transition-all duration-300 hover:text-primary-300"
          >
            <CloudLightning className="h-8 w-8 text-primary-400" />
            <span className="text-xl font-bold">Tempestra</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }`}
            >
              About
            </Link>
          </nav>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-storm-800/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className={`block text-sm font-medium ${
                isActive('/') ? 'text-primary-300' : 'text-white'
              }`}
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className={`block text-sm font-medium ${
                isActive('/about') ? 'text-primary-300' : 'text-white'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header