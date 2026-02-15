import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { create } from 'zustand'
import translations, { type Language, type TranslationKeys } from './locales'

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'he',
  setLanguage: (lang) => set({ language: lang }),
}))

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKeys) => string
  isRtl: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useLanguageStore()

  const isRtl = language === 'he'

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('lang', language)
    html.setAttribute('dir', isRtl ? 'rtl' : 'ltr')
  }, [language, isRtl])

  const t = useCallback(
    (key: TranslationKeys): string => {
      return translations[language][key] ?? key
    },
    [language],
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
