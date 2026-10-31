// App.jsx — root component; sections are composed here in order
import Navbar from "./components/Navbar"
import Hero   from "./components/Hero"
import About  from "./components/About"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* More sections will be added here one by one */}
    </>
  )
}

export default App
