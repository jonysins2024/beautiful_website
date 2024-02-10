import React from 'react'
const Not_Found_Website = () => {
    return (
        <section className='bg-[#fba81c] min-h-screen flex flex-col justify-center items-center'>
            <img className='w-full md:h-[20em]' src="https://i.ibb.co/FKRn0BJ/istockphoto-648691918-612x612.jpg" alt="" />
            <p className='font-bold text-[19px] text-white text-center font-mono pt-6  md:pt-3 animate-bounce'>---The site will restart automatically after the payment requested below---</p>
            <p className='md:text-[30px] text-[20px] tracking-[4px] mb-6 md:tracking-[20px] text-teal-500 shadow-lg shadow-teal-200 rounded-[5px] font-bold text-center -mt-2'>Monthly Maintenance Cost</p>
            <p className='md:text-[80px] text-[70px] text-red-600 font-bold text-center -mt-2'>BDT 10,137</p>
            <p className='text-[40px] text-red-600 font-bold text-center -mt-4'>01726 807 490</p>
            <div className='flex justify-center -mt-[8.3px]'>  <img className='w-[140px] h-[60px] animate-pulse' src="https://i.ibb.co/XWL8bVr/bkash-logo-0-removebg-preview.png" alt="" /></div>
        </section>
    )
}

export default Not_Found_Website
