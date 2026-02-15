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
    'values.legal.title': 'גב משפטי מקצועי',
    'values.legal.desc': 'בעלי החברה הינו עו"ד משנת 2024, מומחה במיסוי ונדל"ן, המבטיח לכם הגנה משפטית ושקיפות מלאה.',
    'values.legal.badge': 'עו"ד מוסמך',

    // FAQ
    'faq.title': 'שאלות ותשובות',
    'faq.coverage.q': 'האם אתם מכסים את כל אזורי הארץ?',
    'faq.coverage.a': 'בהחלט. אנחנו מציעים פריסה ארצית מלאה, עם דגש חזק וזמינות גבוהה באזורי הביקוש במרכז, בשפלה ובדרום.',
    'faq.temporary.q': 'האם יש פתרונות גם לעובדים זמניים או עונתיים?',
    'faq.temporary.a': 'בוודאי. בנינו מסלולים ייעודיים לעובדים עונתיים עם תנאי שכירות גמישים המותאמים לדינמיקה של פרויקטים קצרי טווח.',
    'faq.legal.q': 'מה היתרון בכך שבעלי החברה הוא עורך דין?',
    'faq.legal.a': 'הערך המוסף הוא שקט נפשי מלא. כל החוזים נערכים ומפוקחים ע"י עו"ד מומחה לנדל"ן ומיסוי, מה שמבטיח הגנה משפטית מלאה, עמידה קפדנית בתקנות המגורים ההולמים ומניעת סיכונים בירוקרטיים למעסיק.',
    'faq.maintenance.q': 'מי דואג לתקלות או בעיות בנכס?',
    'faq.maintenance.a': 'אנחנו לוקחים אחריות מלאה. הניהול שלנו כולל מענה שוטף לתקלות ותחזוקה, כך שהעובדים שלכם נהנים מתנאים מעולים ואתם לא צריכים להתעסק בלוגיסטיקה יומיומית.',
    'faq.regulation.q': 'האם הדירות עומדות בתקני המגורים לעובדים זרים?',
    'faq.regulation.a': 'חד משמעית. כל נכס נבחר בקפידה ועובר בדיקה משפטית ותכנונית כדי להבטיח עמידה מלאה בתקנות המגורים ההולמים בחוק.',

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
    'values.legal.title': 'Expert Legal Backing',
    'values.legal.desc': 'Owned by a licensed Attorney since 2024, specializing in Tax and Real Estate law, ensuring full legal protection and transparency.',
    'values.legal.badge': 'Legal Expert',

    // FAQ
    'faq.title': 'FAQ',
    'faq.coverage.q': 'Do you cover all areas of the country?',
    'faq.coverage.a': 'Absolutely. We offer full nationwide coverage, with high availability in high-demand areas in Central Israel, the Shfela, and the South.',
    'faq.temporary.q': 'Do you provide solutions for temporary or seasonal workers?',
    'faq.temporary.a': 'Definitely. We have dedicated programs for seasonal workers with flexible lease terms tailored to short-term project dynamics.',
    'faq.legal.q': 'What is the advantage of the company being owned by an attorney?',
    'faq.legal.a': 'The added value is total peace of mind. All contracts are drafted and supervised by a Real Estate and Tax attorney, ensuring full legal protection, strict compliance with housing regulations, and the elimination of bureaucratic risks for the employer.',
    'faq.maintenance.q': 'Who handles maintenance issues in the properties?',
    'faq.maintenance.a': 'We take full responsibility. Our management includes ongoing maintenance and repair services, ensuring your employees have excellent conditions without you needing to handle daily logistics.',
    'faq.regulation.q': 'Do the apartments meet workforce housing regulations?',
    'faq.regulation.a': 'Categorically yes. Every property is carefully selected and undergoes legal and structural inspection to ensure full compliance with the law.',

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
    'values.legal.title': 'Профессиональная юридическая поддержка',
    'values.legal.desc': 'Владелец компании — адвокат с 2024 года, эксперт в области налогообложения и недвижимости, что гарантирует вам юридическую защиту.',
    'values.legal.badge': 'Адвокат',

    // FAQ
    'faq.title': 'Вопросы и ответы',
    'faq.coverage.q': 'Охватываете ли вы все районы страны?',
    'faq.coverage.a': 'Безусловно. Мы предлагаем полное покрытие по всей стране, с высокой доступностью в центральных районах, Шфеле и на юге.',
    'faq.temporary.q': 'Предоставляете ли вы решения для временных или сезонных работников?',
    'faq.temporary.a': 'Конечно. У нас есть специальные программы для сезонных рабочих с гибкими условиями аренды, адаптированными к краткосрочным проектам.',
    'faq.legal.q': 'В чем преимущество того, что владелец компании — адвокат?',
    'faq.legal.a': 'Это дает вам полное спокойствие. Все договоры составляются и контролируются адвокатом по недвижимости и налогообложению, что гарантирует юридическую защиту и соответствие всем государственным стандартам.',
    'faq.maintenance.q': 'Кто занимается обслуживанием объектов?',
    'faq.maintenance.a': 'Мы берем на себя полную ответственность. Наше управление включает оперативное решение любых бытовых проблем, чтобы вы могли не отвлекаться на логистику.',
    'faq.regulation.q': 'Соответствуют ли квартиры стандартам проживания иностранных рабочих?',
    'faq.regulation.a': 'Однозначно да. Каждый объект проходит тщательную проверку на соответствие законодательным нормам Израиля.',

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