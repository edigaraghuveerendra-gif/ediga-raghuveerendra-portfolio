// App.jsx — root component; sections are composed here in order
import Navbar    from "./components/Navbar"
import Hero      from "./components/Hero"
import About     from "./components/About"
import Skills    from "./components/Skills"
import Process   from "./components/Process"
import Projects  from "./components/Projects"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      {/* More sections will be added here one by one */}
    </>
  )
}

export default App
