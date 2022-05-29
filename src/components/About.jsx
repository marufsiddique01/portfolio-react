import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-grey-300'>

      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-white'>
          <div className='sm:text-right text-4xl font-bold  '>
            <p>
              Hi, I am Maruf. <br /> Nice to meet you. Please look around.
            </p>
          </div>
          <div>
            <p>
              I have a background in business and a passion for learning new technologies.I have a background in business and a passion for learning new technologies.I have a background in business and a passion for learning new technologies.I have a background in business and a passion for learning new technologies.I have a background in business and a passion for learning new technologies.I have a background in business and a passion for learning new technologies.I have a background in business and a passion for learning new technologies.I have a background in business and a passion for learning new technologies.I have a background in business and a passion for learning new technologies.
            </p>
          </div>


        </div>

      </div>

    </div>


  )
}

export default About
