import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Phone,
  Globe,
  ChevronDown,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { languageNames, type Language } from '../i18n/locales'

const navLinks = [
  { key: 'nav.home' as const, href: '#home' },
  { key: 'nav.services' as const, href: '#services' },
  { key: 'nav.process' as const, href: '#process' },
  { key: 'nav.contact' as const, href: '#contact' },
]

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const languages: Language[] = ['he', 'en', 'ru']

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="text-navy-700 font-bold text-lg md:text-xl shrink-0">
            {t('nav.logo')}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-navy-600 hover:text-amber-600 transition-colors font-medium text-sm"
              >
                {t(link.key)}
              </a>
            ))}

            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-navy-600 hover:text-amber-600 transition-colors min-h-[44px] px-2 cursor-pointer"
              >
                <Globe size={18} />
                <span className="text-sm">{languageNames[language]}</span>
                <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-1 end-0 bg-white rounded-lg shadow-lg border border-navy-100 overflow-hidden min-w-[140px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setLangOpen(false)
                        }}
                        className={`block w-full text-start px-4 py-3 text-sm transition-colors cursor-pointer ${
                          lang === language
                            ? 'bg-navy-50 text-navy-700 font-semibold'
                            : 'text-navy-600 hover:bg-navy-50'
                        }`}
                      >
                        {languageNames[lang]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <a
              href="tel:0522056000"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors min-h-[44px]"
            >
              <Phone size={16} />
              {t('nav.callNow')}
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:0522056000"
              className="flex items-center justify-center w-11 h-11 rounded-lg bg-amber-500 text-white"
              aria-label="Call"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center w-11 h-11 rounded-lg text-navy-700 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: language === 'he' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: language === 'he' ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 end-0 bottom-0 w-72 bg-white z-50 shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-4 h-16 border-b border-navy-100">
                <span className="font-bold text-navy-700">{t('nav.logo')}</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-11 h-11 flex items-center justify-center cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-navy-700" />
                </button>
              </div>

              <div className="flex flex-col p-4 gap-1 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-navy-600 hover:bg-navy-50 font-medium transition-colors min-h-[44px] flex items-center"
                  >
                    {t(link.key)}
                  </a>
                ))}

                <div className="border-t border-navy-100 mt-4 pt-4">
                  <p className="px-4 text-xs text-navy-400 mb-2 uppercase tracking-wider">Language</p>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setMobileOpen(false)
                      }}
                      className={`w-full text-start px-4 py-3 rounded-lg text-sm transition-colors min-h-[44px] cursor-pointer ${
                        lang === language
                          ? 'bg-navy-50 text-navy-700 font-semibold'
                          : 'text-navy-600 hover:bg-navy-50'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-navy-100">
                <a
                  href="tel:0522056000"
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors min-h-[44px] w-full"
                >
                  <Phone size={18} />
                  {t('nav.callNow')}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
