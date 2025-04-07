import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='fixed top-5 w-full h-[50px]'>
        <ul className='border border-[#ffd400] h-full w-fit px-8 bg-[#292929] mx-auto rounded-full flex items-center justify-between space-x-4 md:space-x-6 font-jetbrains text-white font-semibold text-[16px]'>
          <NavLink to={"/"} className={({ isActive }) => `${isActive? "text-[#ffd400]" : "text-white"}`}>
            <li className='cursor-pointer'>Home</li>
          </NavLink>
          <NavLink to={"/about"} className={({ isActive }) => `${isActive? "text-[#ffd400]" : "text-white"}`}>
            <li className='cursor-pointer'>About</li>
          </NavLink>
          <NavLink to={"/projects"} className={({ isActive }) => `${isActive? "text-[#ffd400]" : "text-white"}`}>
            <li className='cursor-pointer'>Projects</li>
          </NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Navbar