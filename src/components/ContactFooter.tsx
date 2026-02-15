import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function ContactFooter() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Address */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <MapPin size={22} className="text-amber-400" />
            </div>
            <p className="text-white/90 font-medium">{t('contact.address')}</p>
          </div>

          {/* Phone */}
          <a
            href="tel:0522056000"
            className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors min-h-[44px]"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <Phone size={22} className="text-amber-400" />
            </div>
            <p className="text-white/90 font-medium" dir="ltr">{t('contact.phone')}</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/972522056000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors min-h-[44px]"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <MessageCircle size={22} className="text-green-400" />
            </div>
            <p className="text-white/90 font-medium">{t('contact.whatsapp')}</p>
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-white/50 text-sm px-4">
          {t('contact.copyright')}
        </p>
      </div>
    </footer>
  )
}
