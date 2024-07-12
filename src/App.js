import React from 'react'
import './GlobalStyles.css';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App