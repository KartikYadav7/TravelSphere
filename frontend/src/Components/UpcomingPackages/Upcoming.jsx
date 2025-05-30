import React from 'react'
import {Nav} from '../Navbar'
import Hero from './Hero'
import Footer from '../Footer'
const Upcoming = () => {
  return (
    <>
       <div
        style={{ backgroundImage: `url(/upcoming.png)` }}
        className="relative h-screen w-full object-cover bg-center text-white"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Nav />

        <div className="relative pt-40 font-cursive z-10 text-center justify-center text-3xl md:text-8xl  font-sans cursive italic">
        Coming Soon
        </div>
      </div>
      <Hero/>
      <Footer/>
    </>
  )
}

export default Upcoming
