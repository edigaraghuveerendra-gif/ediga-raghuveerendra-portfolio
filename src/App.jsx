// App.jsx — root component; all sections composed in order
import Navbar          from "./components/Navbar"
import Hero            from "./components/Hero"
import About           from "./components/About"
import TechnicalSkills from "./components/TechnicalSkills"
import Process         from "./components/Process"
import Projects        from "./components/Projects"
import Contact         from "./components/Contact"
import Footer          from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Process />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
