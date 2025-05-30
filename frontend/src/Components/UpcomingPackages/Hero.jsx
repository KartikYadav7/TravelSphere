import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center  gap-6 py-12 md:py-20'>
      <h1 className='font-extrabold text-4xl text-center mt-10'><p className='text-[#f56551]'>Discover Your Next Adventure with AI </p>Personalized Itineraries at Your Fingertips</h1>

      <p className=' text-center text-gray-500'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

      <Link to={'/create-trip'}><Button text= "Get Started ,Its Free"/></Link>
      


    </div>
  )
}

export default Hero