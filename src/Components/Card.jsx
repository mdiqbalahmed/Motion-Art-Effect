import React from 'react'
import card1 from '../assets/motionarteffect-img6.png'
import card2 from '../assets/motionarteffect-img7.png'
import card3 from '../assets/motionarteffect-img9.png'

const Card = () => {
  return (
    <div className=" min-h-screen p-4 m-6 ">
    <div className="container mx-auto pt-12 pb-20">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
        An All-Round Plugin With Powerful <br /> Features
        </h1>
        <p className="text-white text-lg text-center mb-14">
        Whether you're a seasoned web designer or just starting out, Motion Art for <br /> Elementor seamlessly integrates with the Elementor platform, providing you <br />with a seamless and intuitive experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-[#1f1830] border-t-[#332c42] rounded-lg shadow-lg p-8">
                <img src={card3} alt="" />
                <h2 className="text-xl font-bold text-white mb-4">Light Weight</h2>
                <p className="text-white text-xl">
                Motion Art for Elementor is designed to be lightweight.
                </p>
            </div>
            <div className="bg-card border border-[#1f1830] border-t-[#332c42] rounded-lg shadow-lg p-8">
            <img src={card1} alt="" />
                <h2 className="text-xl font-bold text-white mb-4">100% Responsive</h2>
                <p className="text-white">
                Create a consistent visual experience across all devices.
                </p>
            </div>
            <div className="bg-card border border-[#1f1830] border-t-[#332c42] rounded-lg shadow-lg p-8">
            <img src={card2} alt="" />
                <h2 className="text-xl font-bold text-white mb-4">User Friendly Interface</h2>
                <p className="text-white">
                Ensure a smooth experience for both applicants and administrators.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card