import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      {/* container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Maruf Siddique</h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>I am a System Integration Expert and Analyst.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          {' '}
          A Solution‑driven and experienced individual with multi‑dimensional expertise with experience in analyzing requirements and developing project structures and architectures to boost the
          relationship and connections between the company and clients. Seeking opportunities to use my analytical, management, and development skills together to create cost‑effective solutions that
          improve workflow efficiencies.
        </p>
        <div>
          <button
            className='text-white group
          border-2 
          px-6 
          py-3 
          my-2 
          flex 
          flex-row 
          items-center
           hover:bg-pink-600
            hover:border-pink-600
            '
          >
            View Works
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
