import Image from 'next/image'
import React from 'react'

const Skill = () => {
  return (
    <div className='bg-[#0c0c0c] min-h-screen md:min-h-0 ' id="skills">

    <div className='container mx-auto  '>
        <h1 className='text-3xl font-bold py-5 text-white border-b-4 border-yellow-500 text-center mx-auto '>Skills</h1>
        <div className=' grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-7 lg:gap-10 lg:grid-cols-4 py-20 md:py-28  '>
          <div className='flex justify-center items-center bg-[#363636]  mx-5 rounded-xl h-32 '> 
            <Image src="/img/html.png" alt='HTML' width={80} height={80} />
            <h3 className='text-white font-bold text-lg pl-3'>HTML</h3>
           </div>
          <div className='flex justify-center items-center bg-[#363636] mx-5 rounded-xl h-32 '> 
            <Image src="/img/css.png" alt='HTML' width={80} height={80} />
            <h3 className='text-white font-bold text-lg pl-3'>CSS</h3>
           </div>
          <div className='flex justify-center items-center bg-[#363636] mx-5 rounded-xl h-32 '> 
            <Image src="/img/js.png" alt='HTML' width={80} height={80} />
            <h3 className='text-white font-bold text-lg pl-3'>Javascript</h3>
           </div>
          <div className='flex justify-center items-center bg-[#363636] mx-5 rounded-xl h-32 '> 
            <Image src="/img/tailwind.png" alt='HTML' width={80} height={80} />
            <h3 className='text-white font-bold text-lg pl-3'>Tailwind</h3>
           </div>
          <div className='flex justify-center items-center bg-[#363636] mx-5 rounded-xl h-32 '> 
            <Image src="/img/boostrap.png" alt='HTML' width={80} height={80} />
            <h3 className='text-white font-bold text-lg pl-4'>Boostrapt</h3>
           </div>
          <div className='flex justify-center items-center bg-[#363636] mx-5 rounded-xl h-32 '> 
            <Image src="/img/react.png" alt='HTML' width={80} height={80} />
            <h3 className='text-white font-bold text-lg pl-3'>React</h3>
           </div>
          <div className='flex justify-center items-center bg-[#363636] mx-5 rounded-xl h-32 '> 
            <Image src="/img/next.png" alt='HTML' width={80} height={80} className='rounded-full' />
            <h3 className='text-white font-bold text-lg pl-3'>Next JS</h3>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Skill