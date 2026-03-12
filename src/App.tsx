import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Process from './components/Process'
import FAQ from './components/FAQ'
import ContactFooter from './components/ContactFooter'
import AccessibilityWidget from './components/AccessibilityWidget'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-800">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ValueProps />
        <Process />
        <FAQ />
      </main>
      <ContactFooter />
      <AccessibilityWidget />
    </div>
  )
}
