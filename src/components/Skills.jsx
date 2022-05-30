import React from 'react'

// importing all skill logos
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/js.png'
import ReactJS from '../assets/react.svg'
import NodeJS from '../assets/nodejs.svg'
import Selenium from '../assets/selenium.png'
import Python from '../assets/python.png'
import GitHub from '../assets/github.png'




const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]  text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
        {/* container */}
        <div>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experiences</p>
            <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-3 sm:grid-cols-8 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
              <p className='my-4'>HTML</p>
            </div>
          </div>






        </div>

      </div>


    </div>
  )
}

export default Skills
