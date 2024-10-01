import React from 'react'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar';
import Dishes from './component/Dishes';
import About from './component/About';
import NextSection from './component/NextSection';
import Experties from './component/Experties';
import Review from './component/Review';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';







function App() {
  return (
    <main className='overflow-y-hidden text-neutral-200
     antialiased'>
      <HeroSection/>
      <Navbar/>
      <Dishes/>
      <About/>
      <NextSection/>
      <Experties/>
      <Review/>
      <ContactSection/>
      <Footer/>
      
    </main>
  )
}

export default App