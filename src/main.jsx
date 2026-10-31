import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

// Initialise AOS scroll-animation library once at app startup
AOS.init({
  duration: 800,   // animation duration in ms
  once: true,      // animate only the first time element enters view
  easing: 'ease-out-cubic',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
