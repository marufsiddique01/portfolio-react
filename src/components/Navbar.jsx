import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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





    </div>
  )
}

export default Navbar
