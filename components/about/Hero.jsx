import React from 'react'

export const Hero = () => {
  return (
    <div className='max-h-[400px] relative outline-none'>
    {/* Overlay */}
    <div className='py-4 absolute w-full font-title h-full text-gray-200 max-h-[400px] bg-black/40 md:flex justify-center'>
        <h1 className='pl-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>About Us</h1>
        <h1 className='pl-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'> <span className='text-orange-300'>Industrial Mercenary</span> </h1>
    </div>
    <img className='w-full max-h-[400px] object-cover' src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Stress Free" />
    <div className='absolute bottom-0 w-full bg-gradient-to-b from-gray-100/0 h-[150px] via-gray-100 via-95% to-gray-100 
    dark:from-gray-800/0  dark:to-gray-800'>

    </div>
    </div>
  )
}

