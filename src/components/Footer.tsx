import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ringo</h3>
            <p className="text-sm font-medium text-gray-300">One Number. One Plan. Everywhere.</p>
            <p className="text-gray-400 text-sm">
              Stay connected globally using your existing phone number.
            </p>
            <div className="flex items-center space-x-2 pt-4">
              <a
                href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Visit RingoESIM on LinkedIn"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <span className="text-sm text-gray-400">Follow us on LinkedIn</span>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <div className="space-y-2">
              <Link to="/how-it-works" className="block text-sm text-gray-400 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link to="/#pricing" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/device-compatibility" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Device Compatibility
              </Link>
              <Link to="/career" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Support</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/device-compatibility" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Check Compatibility
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-gray-500">© 2025 Ringo. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="mailto:info@ringoesim.com" className="text-xs text-gray-500 hover:text-orange-500 transition-colors">
                info@ringoesim.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;