import { motion } from 'framer-motion'
import { PhoneCall, ArrowDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import HouseAnimation from './HouseAnimation'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-navy-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 w-full">
        {/* Mobile: animation on top, text below. Desktop: text start, animation end */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text side */}
          <motion.div
            className="flex-1 text-center md:text-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-navy-800 leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-base md:text-lg text-navy-500 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="tel:0522056000"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors min-h-[52px] text-base shadow-lg shadow-amber-500/25"
              >
                <PhoneCall size={20} />
                {t('hero.cta')}
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-navy-200 hover:border-navy-400 text-navy-600 font-semibold px-8 py-4 rounded-xl transition-colors min-h-[52px] text-base"
              >
                {t('hero.ctaSecondary')}
                <ArrowDown size={18} />
              </a>
            </div>
          </motion.div>

          {/* Animation side */}
          <motion.div
            className="flex-1 w-full max-w-md md:max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HouseAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
