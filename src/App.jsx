// App.jsx — root component; sections are composed here in order
import Navbar   from "./components/Navbar"
import Hero     from "./components/Hero"
import About    from "./components/About"
import Skills   from "./components/Skills"
import Process  from "./components/Process"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Process />
      {/* More sections will be added here one by one */}
    </>
  )
}

export default App
