import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Program/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/TESTIMONIALS/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Video from './components/Video/Video'

const App = () => {

const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs/> 
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials/>
        <Title subTitle='CONTACT US' title='Get in Touch' />
        <Contact/>
        <Footer/>
        </div> 
         <Video playstate={playState} setPlayState={setPlayState}/>
         </div>
  )
}

export default App