import { useState, useEffect, useRef } from 'react'
import { Accessibility, X, Sun, EyeOff, Underline, Pause, RotateCcw } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

type FontSize = 'normal' | 'large' | 'xl'

type A11yPrefs = {
  fontSize: FontSize
  highContrast: boolean
  grayscale: boolean
  underlineLinks: boolean
  pauseAnimations: boolean
}

const DEFAULT_PREFS: A11yPrefs = {
  fontSize: 'normal',
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  pauseAnimations: false,
}

const STORAGE_KEY = 'ilan-a11y'

function loadPrefs(): A11yPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...DEFAULT_PREFS, ...JSON.parse(raw) }
  } catch {}
  return DEFAULT_PREFS
}

function applyPrefs(prefs: A11yPrefs) {
  const html = document.documentElement
  html.classList.toggle('a11y-large-text', prefs.fontSize === 'large')
  html.classList.toggle('a11y-xl-text', prefs.fontSize === 'xl')
  html.classList.toggle('a11y-high-contrast', prefs.highContrast)
  html.classList.toggle('a11y-grayscale', prefs.grayscale)
  html.classList.toggle('a11y-underline-links', prefs.underlineLinks)
  html.classList.toggle('a11y-pause-animations', prefs.pauseAnimations)
}

const FONT_LABELS: Record<FontSize, string> = {
  normal: 'A',
  large: 'A+',
  xl: 'A++',
}

export default function AccessibilityWidget() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState<A11yPrefs>(loadPrefs)
  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  // Apply to DOM + persist on every change
  useEffect(() => {
    applyPrefs(prefs)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)) } catch {}
  }, [prefs])

  // Escape closes the panel and returns focus to trigger
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Move focus into panel when it opens
  useEffect(() => {
    if (open) panelRef.current?.focus()
  }, [open])

  const update = <K extends keyof A11yPrefs>(key: K, value: A11yPrefs[K]) =>
    setPrefs(prev => ({ ...prev, [key]: value }))

  const reset = () => setPrefs(DEFAULT_PREFS)

  const toggles = [
    { key: 'highContrast' as const,    label: t('a11y.highContrast'),    Icon: Sun       },
    { key: 'grayscale' as const,       label: t('a11y.grayscale'),       Icon: EyeOff    },
    { key: 'underlineLinks' as const,  label: t('a11y.underlineLinks'),  Icon: Underline },
    { key: 'pauseAnimations' as const, label: t('a11y.pauseAnimations'), Icon: Pause     },
  ]

  const isAnyActive =
    prefs.fontSize !== 'normal' ||
    prefs.highContrast ||
    prefs.grayscale ||
    prefs.underlineLinks ||
    prefs.pauseAnimations

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3">

      {/* Panel — opens above the button */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('a11y.title')}
          tabIndex={-1}
          className="bg-white rounded-2xl shadow-2xl border border-navy-100 w-72 p-4 outline-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Accessibility size={18} aria-hidden="true" className="text-navy-600" />
              <h2 className="font-bold text-navy-800 text-base">{t('a11y.title')}</h2>
            </div>
            <button
              onClick={() => { setOpen(false); btnRef.current?.focus() }}
              aria-label={t('a11y.close')}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-navy-500 hover:bg-navy-50 transition-colors"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Font size */}
            <div>
              <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-2">
                {t('a11y.textSize')}
              </p>
              <div
                className="flex gap-2"
                role="group"
                aria-label={t('a11y.textSize')}
              >
                {(['normal', 'large', 'xl'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => update('fontSize', size)}
                    aria-pressed={prefs.fontSize === size}
                    className={`flex-1 py-2 rounded-lg font-bold border transition-colors ${
                      size === 'normal' ? 'text-sm' : size === 'large' ? 'text-base' : 'text-lg'
                    } ${
                      prefs.fontSize === size
                        ? 'bg-navy-800 text-white border-navy-800'
                        : 'border-navy-200 text-navy-600 hover:bg-navy-50'
                    }`}
                  >
                    {FONT_LABELS[size]}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle buttons */}
            {toggles.map(({ key, label, Icon }) => (
              <button
                key={key}
                onClick={() => update(key, !prefs[key])}
                aria-pressed={prefs[key]}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors text-sm font-medium ${
                  prefs[key]
                    ? 'bg-navy-800 text-white border-navy-800'
                    : 'border-navy-200 text-navy-600 hover:bg-navy-50'
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                <span className="flex-1 text-start">{label}</span>
                <span className="text-xs opacity-60">
                  {prefs[key] ? t('a11y.on') : t('a11y.off')}
                </span>
              </button>
            ))}

            {/* Reset */}
            <button
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-navy-200 text-navy-500 hover:bg-navy-50 text-sm transition-colors"
            >
              <RotateCcw size={14} aria-hidden="true" />
              {t('a11y.reset')}
            </button>
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        ref={btnRef}
        onClick={() => setOpen(o => !o)}
        aria-label={t('a11y.open')}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isAnyActive
            ? 'bg-amber-500 hover:bg-amber-600 text-white'
            : 'bg-navy-800 hover:bg-navy-700 text-white'
        }`}
      >
        <Accessibility size={26} aria-hidden="true" />
        {/* Active indicator dot */}
        {isAnyActive && (
          <span
            aria-hidden="true"
            className="absolute top-1 end-1 w-3 h-3 rounded-full bg-white border-2 border-amber-500"
          />
        )}
      </button>
    </div>
  )
}
