import React from 'react'
import img5 from '../assets/motionarteffect-img10.png'
import img8 from '../assets/motionarteffect-img8.png'


const Sections = () => {
  return (
    <div className='p-4 m-6 '>
        <h1 className='text-white text-center text-5xl mb-16'>Apply On Any Section Or Enable For <br />Whole Page</h1>

        <div className='flex flex-col md:flex-row items-center  mx-auto mt-14 gap-5'>

        <a className="p-8  bg-card border border-[#1f1830] border-t-[#332c42] rounded-2xl outline-black flex flex-col items-center mb-5"
    >
       <div className="">
        <h4 className="font-bold text-4xl text-white">Apply On Section</h4>
        <p className="mt-2 text-gray-500 mb-10">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
        </p>
        
    </div>
    <img src={img5} alt="" />
    
</a>
<a className="p-8 bg-card border border-[#1f1830] border-t-[#332c42] rounded-2xl outline-black flex flex-col items-center mt-10"
    >
      <div className="">
        
      <h4 className="font-bold text-4xl text-white">Apply On Section</h4>
        <p className="mt-2 text-gray-500 mb-10">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
        </p>
    </div> 
    <img src={img5} alt="" />
    
</a>

        </div>


        <div className="w-full  text-center  mt-16 mb-16 ">
                <a >
                    <div
                        className=" object-center w-full  mx-auto bg-card border border-[#1f1830] border-t-[#332c42] rounded-2xl p-10">
                        <div className="py-8 px-4">
                            <h5 className="text-4xl mb-6 font-bold text-white">Supported by All Popular Browsers</h5>
                            <span className="mt-1 font-medium text-white">Rest assured, Motion Art is designed to be compatible <br /> with all major web browsers</span>
                            <img className='mx-auto' src={img8} alt="" />
                           
                        </div>
                         
                    </div>
                </a>
            </div>



        




    </div>
  )
}

export default Sections