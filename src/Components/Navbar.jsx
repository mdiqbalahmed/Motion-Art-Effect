import React from 'react'
import logo from '../assets/MotionArtEffect-logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 m-6 relative'>
      
            <img className=''  src={logo} alt="Logo" />
        
        <div className=''>
        <a className=" invisible lg:visible px-12 py-4 text-xl text-center text-black bg-white border border-white rounded active:text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring"
    href="/download">
   Purchase Now
  </a>
        </div>
    </div>
  )
}

export default Navbar