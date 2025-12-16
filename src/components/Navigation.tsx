import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface NavigationProps {
  currentPage?: string;
  onWaitlistOpen?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onWaitlistOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  // Check for URL-based waitlist trigger
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('join-waitlist') === 'true') {
      // Clean URL without refresh
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);

      // Open waitlist (slight delay to ensure hydration/render)
      setTimeout(() => {
        onWaitlistOpen?.();
      }, 500);
    }
  }, [location.search, onWaitlistOpen]);

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Plans', path: '/#pricing', id: 'plans' },
    { name: 'Use Cases', path: '/use-cases', id: 'use-cases' },
    { name: 'About', path: '/how-it-works', id: 'about' },
    { name: 'Contact', path: '/contact', id: 'contact' }
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.includes('#pricing')) {
      // Handle pricing scroll
      setTimeout(() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Ringo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${currentPage === item.id ? 'text-orange-500' : 'text-gray-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
              data-waitlist-trigger
            >
              <Link to="?join-waitlist=true">Join Waitlist</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Always visible on mobile screens */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden border-t bg-white shadow-lg" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block px-3 py-3 text-base font-medium transition-all duration-200 hover:text-orange-500 hover:bg-orange-50 rounded-lg ${currentPage === item.id ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' : 'text-gray-700'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-3 border-t border-gray-100 mt-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 shadow-md"
                  data-waitlist-trigger
                >
                  <Link
                    to="?join-waitlist=true"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join Waitlist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;