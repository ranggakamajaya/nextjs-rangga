import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiTwotoneCrown } from 'react-icons/ai';
import { BsFillPersonFill,BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {MdFavorite,  MdHomeRepairService} from 'react-icons/md'
import {RiLogoutBoxFill, RiMailSendFill} from 'react-icons/ri'

const Navbar = () => { 
const [nav, setNav] = useState(false)

const [darkMode, setDarkMode] = useState(undefined)

const switchMode = () => {
  setDarkMode(!darkMode);
};

const switchNav = () => {
  setNav(!nav);
}


useEffect(() => {
  if (darkMode){
    localStorage.setItem("darkMode","true");
    window.document.documentElement.classList.add("dark");
  } else if( darkMode === false ) {
    localStorage.setItem("darkMode","false");
    window.document.documentElement.classList.remove("dark");
  } else {
    setDarkMode(localStorage.getItem("darkMode") === "true");
  }
},[darkMode]);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 border-b'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={switchNav} className='cursor-pointer mr-2'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='font-title flex text-xl sm:text-2xl lg:text-4xl px-2 font-bold font-italic cursor-pointer'>
         <Link href='/'>Industrial Mercenary</Link> 
        </h1>
        <AiTwotoneCrown size={30} className='hidden md:flex  '/>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 dark:bg-gray-700 rounded-full flex items-center px-2 w-[150px] sm:w-[300px] lg:w-[375px] 2lg:w-[450px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search offer'
        />
      </div>
      {/* Cart button */}
      
        {darkMode ? (
          <button onClick={switchMode} className='border hover:bg-gray-200 hover:text-gray-800 hidden md:flex items-center py-2 font-semibold rounded-full px-2'>
            <BsFillSunFill size={20} className='mr-2' /> <span className='hidden lg:flex'>Light Mode</span>
           </button>
        ) : (
          <button onClick={switchMode} className='border hover:bg-gray-800 hover:text-gray-100 hidden md:flex items-center py-2 font-semibold rounded-full px-2'>
            <BsMoonStarsFill size={20} className='mr-2' /> <span className='hidden lg:flex'>Dark Mode</span>
           </button>
        )}
        
     

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 
      'fixed top-0 left-0 w-[300px] h-screen z-20 duration-300 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100' :
      'fixed top-0 left-[-100%] w-[300px] h-screen bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 z-20 duration-300' }>
        <AiOutlineClose
            onClick={switchNav}
          size={30}
          className='absolute right-4 top-4 cursor-pointer hover:bg-gray-800 hover:text-white duration-300 dark:hover:bg-gray-200 dark:hover:text-gray-800 rounded-full'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Services</span>
        </h2>
        <nav>
            <ul className='flex flex-col mt-2'>
              <Link onClick={switchNav} href='/services'><li className='text-xl py-4 pl-4 flex hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 duration-300'>
                <MdHomeRepairService size={25} className='mr-4' /> Services</li></Link>
                <li onClick={switchNav} className='text-xl py-4 pl-4 flex hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 duration-300'>
                <BsFillPersonFill size={25} className='mr-4' /> Profile</li>
                <li onClick={switchNav} className='text-xl py-4 pl-4 flex hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 duration-300'>
                <MdFavorite size={25} className='mr-4' /> Favorites</li>
              <Link onClick={switchNav} href='/contact'> <li className='text-xl py-4 pl-4 flex hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 duration-300'>
                <RiMailSendFill size={25} className='mr-4' /> Contact Us</li></Link>
              <Link onClick={switchNav} href='/about'><li className='text-xl py-4 pl-4 flex hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 duration-300'>
                <AiTwotoneCrown size={25} className='mr-4' /> About Us</li></Link>  
                <li onClick={switchMode} className='flex md:hidden text-xl py-4 pl-4  hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 duration-300'>
                {darkMode ?
                (<span className='flex'><BsFillSunFill size={25} className='mr-4' />Light Mode</span>): 
                (<span className='flex'><BsMoonStarsFill size={25} className='mr-4' />Dark Mode</span>)
                }
                </li>
                <li onClick={switchNav} className='text-xl py-4 pl-4 flex hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800 duration-300 absolute bottom-0 w-full'>
                <RiLogoutBoxFill size={25} className='mr-4'/>Log Out</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};


export default Navbar