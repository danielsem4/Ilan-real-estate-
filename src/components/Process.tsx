import { motion } from 'framer-motion'
import { MessageCircle, Search, FileText, Home } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const steps = [
  {
    icon: MessageCircle,
    titleKey: 'process.step1.title' as const,
    descKey: 'process.step1.desc' as const,
    num: 1,
  },
  {
    icon: Search,
    titleKey: 'process.step2.title' as const,
    descKey: 'process.step2.desc' as const,
    num: 2,
  },
  {
    icon: FileText,
    titleKey: 'process.step3.title' as const,
    descKey: 'process.step3.desc' as const,
    num: 3,
  },
  {
    icon: Home,
    titleKey: 'process.step4.title' as const,
    descKey: 'process.step4.desc' as const,
    num: 4,
  },
]

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="py-16 md:py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-navy-800 text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {t('process.title')}
        </motion.h2>

        {/* Mobile: vertical list */}
        <div className="flex flex-col gap-6 md:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-10 bg-navy-200 mt-2" />
                  )}
                </div>
                <div className="pt-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={18} className="text-navy-600" />
                    <h3 className="font-bold text-navy-800">{t(step.titleKey)}</h3>
                  </div>
                  <p className="text-navy-500 text-sm leading-relaxed">{t(step.descKey)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Timeline bar */}
          <div className="relative">
            <div className="absolute top-6 start-[12.5%] end-[12.5%] h-1 bg-navy-200 rounded-full" />
            <motion.div
              className="absolute top-6 start-[12.5%] h-1 bg-amber-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '75%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-amber-500/25 relative z-10">
                    {step.num}
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon size={20} className="text-navy-600" />
                      <h3 className="font-bold text-navy-800 text-lg">{t(step.titleKey)}</h3>
                    </div>
                    <p className="text-navy-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                      {t(step.descKey)}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
