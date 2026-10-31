// App.jsx — root component; sections are composed here in order
import Navbar    from "./components/Navbar"
import Hero      from "./components/Hero"
import About     from "./components/About"
import Skills    from "./components/Skills"
import Process   from "./components/Process"
import Projects  from "./components/Projects"
import Contact   from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <Contact />
      {/* Footer will be added next */}
    </>
  )
}

export default App
