import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const items = [
  { qKey: 'faq.coverage.q' as const, aKey: 'faq.coverage.a' as const },
  { qKey: 'faq.temporary.q' as const, aKey: 'faq.temporary.a' as const },
  { qKey: 'faq.legal.q' as const, aKey: 'faq.legal.a' as const },
  { qKey: 'faq.maintenance.q' as const, aKey: 'faq.maintenance.a' as const },
  { qKey: 'faq.regulation.q' as const, aKey: 'faq.regulation.a' as const },
]

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-16 md:py-24 bg-navy-50/50">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-navy-800 text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {t('faq.title')}
        </motion.h2>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={item.qKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-navy-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start cursor-pointer"
                >
                  <span className="font-semibold text-navy-800">
                    {t(item.qKey)}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-navy-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-5 pb-4 text-navy-500 leading-relaxed">
                        {t(item.aKey)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
