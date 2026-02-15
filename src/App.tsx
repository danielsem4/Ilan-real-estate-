import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Process from './components/Process'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-800">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Process />
      </main>
      <ContactFooter />
    </div>
  )
}
