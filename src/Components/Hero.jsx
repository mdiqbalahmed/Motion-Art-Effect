import React from 'react'
import logo from '../assets/motionarteffect-img2.png'
import img2 from '../assets/motionarteffect-img1.png'
import img3 from '../assets/motionarteffect-img3.png'
import img4 from '../assets/motionarteffect-img4.png'
import img5 from '../assets/motionarteffect-img5.png'

const Hero = () => {
  return (
    <div className='relative p-4 m-6 '>
        <div className='flex flex-col md:flex-row mt-20 '>

       
<div className="basis-1/4 text-white text-lg font-medium text-center md:text-left"><span className='text-color'>Transform <br />Your Website</span>
    <br />With Motion <br />Art Effect</div>
 <div className="basis-1/2 text-white">
    <h1 className='text-6xl font-medium'>Attract Your Visitors Attention With Colorful <span className='text-color'>Motion Art Effect</span></h1>
    <p className='text-gray-300 font-normal mt-6 '>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
 </div>

</div>

        <h1 className='text-white text-center text-3xl  mb-12 mt-20'>Trusted by thousands of users around the world</h1>
        <div className='grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:px-8 mx-auto '>
            <div className='flex items-center '>
            <img src={img2} alt="" />
        <div className="px-4 text-white ">
            <img className='mb-4 mx-auto' src={img4} alt="" />
            <p className="">4.5 Score, 9 Reviews</p>
            </div>

            </div>
       
            <div className='flex items-center  '>
            <img src={img3} alt="" />
        <div className="px-4 text-white ">
            <img className='mb-4' src={img4} alt="" />
            <p className="">4.5 Score, 9 Reviews</p>
            </div>
            </div>

            <div className='flex items-center  '>
            <img src={logo} alt="" />
        <div className="px-4 text-white ">
            <img className='mb-4' src={img4} alt="" />
            <p className="">4.5 Score, 9 Reviews</p>
            </div>
            </div>

            

        </div>


        <section className="py-20 px-4">
    <div className="flex flex-col md:flex-row  mx-auto justify-between items-center">
        <div className="md:w-2/3 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold leading-tight mb-4 text-white">Turn Your Cursor Into A Colorful Magic <br /> Wand & Charm Your Visitors</h2>
            <p className="text-xl mb-4 text-white">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements</p>
            <button className="bg-color text-white font-medium py-5 px-24 rounded-xl text-xl">Purchase From Envato   &#8594;</button>
        </div>
        <div className="md:w-1/4 ">
            <img src={img5} alt="" />
        </div>
        
    </div>
</section>
        
        


    </div>
  )
}

export default Hero