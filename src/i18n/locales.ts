export type Language = 'he' | 'en' | 'ru'

export const languageNames: Record<Language, string> = {
  he: 'עברית',
  en: 'English',
  ru: 'Русский',
}

export type TranslationKeys = keyof typeof translations.he

const translations = {
  he: {
    // Navbar
    'nav.logo': 'אילן תורן ניהול נכסים',
    'nav.home': 'דף הבית',
    'nav.services': 'שירותים',
    'nav.process': 'תהליך העבודה',
    'nav.contact': 'צור קשר',
    'nav.callNow': 'התקשרו עכשיו',

    // Hero
    'hero.title': 'הכתובת שלכם למגורי עובדים בישראל',
    'hero.subtitle': 'אילן תורן ניהול נכסים מנהלת מאות דירות עבור החברות המובילות במשק. פתרונות איכותיים, עמידה בתקנים ושירותי לוגיסטיקה, הכל תחת קורת גג אחת.',
    'hero.cta': 'לשיחת ייעוץ חינם',
    'hero.ctaSecondary': 'למדו עוד',

    // Value Props
    'values.title': 'למה לבחור בנו?',
    'values.speed.title': 'מהירות ביצוע',
    'values.speed.desc': 'אכלוס תוך מספר ימים,  אנחנו מבינים שזמן זה כסף ופועלים בהתאם.',
    'values.speed.badge': 'מהירות',
    'values.compliance.title': 'עמידה בתקנים',
    'values.compliance.desc': 'כל הנכסים עומדים בדרישות הרגולציה ובתקני הבטיחות המחמירים ביותר.',
    'values.compliance.badge': 'מוסמך',
    'values.management.title': 'ניהול רציף',
    'values.management.desc': 'צוות ניהול זמין 24/7 לכל בעיה, תקלה או בקשה, תמיד כאן בשבילכם.',
    'values.management.badge': '24/7',

    // Process
    'process.title': 'תהליך העבודה שלנו',
    'process.step1.title': 'פגישת ייעוץ',
    'process.step1.desc': 'הבנת הצרכים שלכם ותכנון מותאם אישית.',
    'process.step2.title': 'סקר נכסים',
    'process.step2.desc': 'איתור וסינון הנכסים המתאימים ביותר עבורכם.',
    'process.step3.title': 'חוזה ותנאים',
    'process.step3.desc': 'הסכם שקוף עם תנאים ברורים ומוגנים.',
    'process.step4.title': 'אכלוס וניהול',
    'process.step4.desc': 'מעבר חלק וניהול שוטף של הנכס.',

    // Contact
    'contact.title': 'צרו קשר',
    'contact.address': 'בת ים, ישראל',
    'contact.phone': '052-2056000',
    'contact.whatsapp': 'שלחו הודעת WhatsApp',
    'contact.copyright': '© 2026 אילן ניהול נכסים. כל הזכויות שמורות.',
  },

  en: {
    // Navbar
    'nav.logo': 'Ilan Property Management',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.callNow': 'Call Now',

    // Hero
    'hero.title': 'Your Premier Partner for Workforce Housing in Israel',
    'hero.subtitle': 'Ilan Property Management manages hundreds of apartments for leading corporations. High-quality housing, full regulatory compliance, and comprehensive logistics – all under one roof.',
    'hero.cta': 'Get a Free Consultation',
    'hero.ctaSecondary': 'Learn More',

    // Value Props
    'values.title': 'Why Choose Us?',
    'values.speed.title': 'Fast Execution',
    'values.speed.desc': 'Occupancy within 48 hours — we understand that time is money and act accordingly.',
    'values.speed.badge': '48 Hours',
    'values.compliance.title': 'Full Compliance',
    'values.compliance.desc': 'All properties meet the strictest regulatory requirements and safety standards.',
    'values.compliance.badge': 'Certified',
    'values.management.title': 'Continuous Management',
    'values.management.desc': 'Our management team is available 24/7 for any issue, malfunction, or request — always here for you.',
    'values.management.badge': '24/7',

    // Process
    'process.title': 'Our Process',
    'process.step1.title': 'Consultation',
    'process.step1.desc': 'Understanding your needs and creating a custom plan.',
    'process.step2.title': 'Property Survey',
    'process.step2.desc': 'Finding and filtering the most suitable properties for you.',
    'process.step3.title': 'Contract & Terms',
    'process.step3.desc': 'Transparent agreement with clear, protected terms.',
    'process.step4.title': 'Occupancy & Management',
    'process.step4.desc': 'Smooth transition and ongoing property management.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Bat Yam, Israel',
    'contact.phone': '052-2056000',
    'contact.whatsapp': 'Send WhatsApp Message',
    'contact.copyright': '© 2026 Ilan Property Management. All rights reserved.',
  },

  ru: {
    // Navbar
    'nav.logo': 'Илан — Управление Недвижимостью',
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.process': 'Процесс',
    'nav.contact': 'Контакты',
    'nav.callNow': 'Позвоните сейчас',

    // Hero
    'hero.title': 'Ваш адрес для размещения иностранных сотрудников в Израиле',
    'hero.subtitle': 'Илан — Управление Недвижимостью управляет сотнями квартир для ведущих компаний. Качественное жилье, соответствие стандартам и полная логистика — всё под одной крышей.',
    'hero.cta': 'Бесплатная консультация',
    'hero.ctaSecondary': 'Узнать больше',

    // Value Props
    'values.title': 'Почему мы?',
    'values.speed.title': 'Быстрое выполнение',
    'values.speed.desc': 'Заселение в течение 48 часов — мы понимаем, что время — деньги.',
    'values.speed.badge': '48 часов',
    'values.compliance.title': 'Полное соответствие',
    'values.compliance.desc': 'Все объекты соответствуют строжайшим нормативным требованиям и стандартам безопасности.',
    'values.compliance.badge': 'Сертиф.',
    'values.management.title': 'Непрерывное управление',
    'values.management.desc': 'Наша команда доступна 24/7 для решения любых вопросов — мы всегда рядом.',
    'values.management.badge': '24/7',

    // Process
    'process.title': 'Наш процесс',
    'process.step1.title': 'Консультация',
    'process.step1.desc': 'Анализ ваших потребностей и создание индивидуального плана.',
    'process.step2.title': 'Обзор объектов',
    'process.step2.desc': 'Поиск и отбор наиболее подходящих объектов.',
    'process.step3.title': 'Договор и условия',
    'process.step3.desc': 'Прозрачное соглашение с чёткими условиями.',
    'process.step4.title': 'Заселение и управление',
    'process.step4.desc': 'Плавный переход и текущее управление объектом.',

    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.address': 'Бат-Ям, Израиль',
    'contact.phone': '052-2056000',
    'contact.whatsapp': 'Написать в WhatsApp',
    'contact.copyright': '© 2026 Илан — Управление Недвижимостью. Все права защищены.',
  },
} as const

export default translations