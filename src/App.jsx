import './App.css'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="home-body">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
