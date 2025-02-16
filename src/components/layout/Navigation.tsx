import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: 'services', href: '/services' },
    { key: 'solutions', href: '/solutions' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' }
  ];

  const languages = {
    en: 'English',
    de: 'Deutsch',
    lv: 'Latviešu',
    es: 'Español'
  } as const;

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            nextai
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="group flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{languages[i18n.language as keyof typeof languages]}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
                  {Object.entries(languages).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        i18n.changeLanguage(code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                        i18n.language === code ? 'text-blue-400' : 'text-gray-300'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
              {t('hero.cta.primary')}
            </button>
          </div>

          {/* Mobile Menu and Language Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Menu */}
      {isLangMenuOpen && (
        <div className="md:hidden absolute w-full bg-gray-800 border-t border-gray-700">
          <div className="px-6 py-2">
            {Object.entries(languages).map(([code, name]) => (
              <button
                key={code}
                onClick={() => {
                  i18n.changeLanguage(code);
                  setIsLangMenuOpen(false);
                }}
                className={`block w-full text-left py-3 border-b border-gray-700 last:border-0 ${
                  i18n.language === code ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
              {t('hero.cta.primary')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;