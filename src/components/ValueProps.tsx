import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Headset } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const cards = [
  {
    icon: Zap,
    titleKey: 'values.speed.title' as const,
    descKey: 'values.speed.desc' as const,
    badgeKey: 'values.speed.badge' as const,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: ShieldCheck,
    titleKey: 'values.compliance.title' as const,
    descKey: 'values.compliance.desc' as const,
    badgeKey: 'values.compliance.badge' as const,
    color: 'text-navy-600',
    bg: 'bg-navy-50',
  },
  {
    icon: Headset,
    titleKey: 'values.management.title' as const,
    descKey: 'values.management.desc' as const,
    badgeKey: 'values.management.badge' as const,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ValueProps() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-navy-800 text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {t('values.title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.titleKey}
                variants={cardVariants}
                className="relative bg-white border border-navy-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Badge */}
                <span className="absolute top-4 end-4 text-xs font-bold bg-navy-800 text-white px-3 py-1 rounded-full">
                  {t(card.badgeKey)}
                </span>

                <div className={`w-14 h-14 rounded-xl ${card.bg} flex items-center justify-center mb-5`}>
                  <Icon size={28} className={card.color} />
                </div>

                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  {t(card.titleKey)}
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  {t(card.descKey)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
