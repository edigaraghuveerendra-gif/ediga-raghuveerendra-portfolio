// App.jsx — root component; sections composed in specified sequential order
import Preloader       from "./components/Preloader"
import Navbar          from "./components/Navbar"
import Hero            from "./components/Hero"
import About           from "./components/About"
import TechnicalSkills from "./components/TechnicalSkills"
import Projects        from "./components/Projects"
import Internships     from "./components/Internships"
import Leadership      from "./components/Leadership"
import SoftSkills      from "./components/SoftSkills"
import Contact         from "./components/Contact"
import Footer          from "./components/Footer"
import { internshipsList, leadershipList } from "./data/portfolioData"

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      {internshipsList && internshipsList.length > 0 && <Internships />}
      {leadershipList && leadershipList.length > 0 && <Leadership />}
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
