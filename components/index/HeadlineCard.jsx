import React from 'react'

const HeadlineCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 hover:bg-black/70 duration-200 rounded-xl p-2'>
          <p className='font-bold text-2xl px-2 pt-4 text-white'>Top Mercenary</p>
          <p className='px-2 text-white'>Top Quality</p>
          <button className='hover:scale-110 duration-200 transition bg-gray-100 dark:bg-gray-800 mx-2 absolute bottom-4 rounded-lg p-2 font-title'>Check Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50  hover:bg-black/70 duration-200 rounded-xl p-2'>
          <p className='font-bold text-2xl px-2 pt-4 text-white'>New Job</p>
          <p className='px-2 text-white'>Added Daily</p>
          <button className='hover:scale-110 duration-200 transition bg-gray-100 dark:bg-gray-800 rounded-lg mx-2 absolute bottom-4 p-2 font-title'>Check Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50  hover:bg-black/70 duration-200 rounded-xl p-2'>
          <p className='font-bold text-2xl px-2 pt-4 text-white'>New Offer</p>
          <p className='px-2 text-white'>Added Daily</p>
          <button className='hover:scale-110 duration-200 transition bg-gray-100 dark:bg-gray-800 rounded-lg p-2 mx-2 absolute bottom-4 font-title'>Check Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCard;