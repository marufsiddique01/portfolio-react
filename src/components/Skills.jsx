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
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center h-full'>
        {/* container */}

        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff5757]'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500 pt-2'>
            <img className='w-[70px] mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500 pt-2'>
            <img className='w-[70px] mx-auto' src={CSS} alt='HTML icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500 pt-2'>
            <img className='w-[70px] mx-auto' src={JS} alt='HTML icon' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500 pt-2'>
            <img className='w-[70px] mx-auto' src={ReactJS} alt='HTML icon' />
            <p className='my-4'>ReactJS</p>
          </div>
          <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500 pt-2'>
            <img className='w-[70px] mx-auto' src={NodeJS} alt='HTML icon' />
            <p className='my-4'>NodeJS</p>
          </div>
          <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500 pt-2'>
            <img className='w-[70px] mx-auto' src={GitHub} alt='HTML icon' />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500 pt-2'>
            <img className='w-[70px] mx-auto' src={Python} alt='HTML icon' />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#575758] hover:scale-110 duration-500 pt-2'>
            <img className='w-[70px] mx-auto' src={Selenium} alt='HTML icon' />
            <p className='my-4'>Selenium Web-Driver</p>
          </div>
        </div>







      </div>


    </div>
  )
}

export default Skills
