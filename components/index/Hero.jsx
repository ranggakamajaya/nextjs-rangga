import React from 'react'

const Hero = () => {
  return ( 
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full font-title h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='pl-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> Snap Your</h1>
                <h1 className='pl-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-300'>Stress</span> </h1>
                <h1 className='pl-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> To Dust </h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Stress Free" />
        </div>
  )
}

export default Hero