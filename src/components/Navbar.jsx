import React, { useState } from 'react'

import { FaBars, FaTimes, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)




  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
      {/* logo of my self */}
      <div>
        <img src={Logo} alt='Maruf Siddique' style={{ width: "160px" }} />
      </div>
      {/* navbar menus */}

      <ul className='hidden md:flex text-white '>
        <li> Home</li>
        <li> About</li>
        <li> Skills</li>
        <li> Projects</li>
        <li> Contact</li>
      </ul>


      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 text-white'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}


      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-white'}>
        <li className='py-6 text-4xl '> About</li>
        <li className='py-6 text-4xl '> Home</li>
        <li className='py-6 text-4xl '> Skills</li>
        <li className='py-6 text-4xl '> Projects</li>
        <li className='py-6 text-4xl '> Contact</li>
      </ul>


      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a href='/' className='flex justify-between items-center w-full text-grey-300'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c05f5f]'>
            <a href='/' className='flex justify-between items-center w-full text-grey-300'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href='/' className='flex justify-between items-center w-full text-grey-300'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a href='/' className='flex justify-between items-center w-full text-grey-300'>
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#26b84a]'>
            <a href='/' className='flex justify-between items-center w-full text-grey-300'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>





    </div>
  )
}

export default Navbar
