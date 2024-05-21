import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between p-4 bg-color flex-col-reverse md:flex-row text-center  '>
        
       <h1 className='text-white'>© 2023 Copywrite. All rights reserved by QodeMatrix</h1>
        
        <div className='flex gap-6 mx-auto md:mx-0 '>
            <div className='text-white'>
            Documentation
            </div>
            <div className='text-white'>
            Support
            </div>
        </div>

    </div>
  )
}

export default Footer