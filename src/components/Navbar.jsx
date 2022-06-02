import React, { useState } from 'react'

import { Link } from 'react-scroll'


import { FaBars, FaTimes, FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
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
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li> <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li> <Link to="work" smooth={true} duration={500}>
          Works
        </Link></li>
        <li> <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>


      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 text-white'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}


      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-white'}>
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a href='https://www.linkedin.com/in/marufsiddique01/' target="_blank" className='flex justify-between items-center w-full text-grey-300' rel="noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c05f5f]'>
            <a href='mailto:marufsiddique71@gmail.com' target="_blank" className='flex justify-between items-center w-full text-grey-300' rel="noreferrer">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href='https://github.com/marufsiddique01' target="_blank" className='flex justify-between items-center w-full text-grey-300' rel="noreferrer">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fb3958]'>
            <a href='https://www.instagram.com/marufsiddique01/' target="_blank" className='flex justify-between items-center w-full text-grey-300' rel="noreferrer">
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a href='https://www.facebook.com/marufsiddique01/' target="_blank" className='flex justify-between items-center w-full text-grey-300' rel="noreferrer">
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#26b84a]'>
            <a href='/' target="_blank" className='flex justify-between items-center w-full text-grey-300'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>





    </div>
  )
}

export default Navbar
