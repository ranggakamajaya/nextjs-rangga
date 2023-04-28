import React, {useState, useEffect} from 'react'
import {AiFillInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'
import {IoIosArrowUp} from 'react-icons/io'

const Footer = () => {
    const [contact, setCon] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const handleContact = () =>{
        setCon(!contact);
    };
    const handleScreenSizeChange = () => {
        if (window.innerWidth < 900) {
          setIsSmallScreen(true);
        } else {
          setIsSmallScreen(false);
        }
      };
    useEffect(() => {
        window.addEventListener('resize', handleScreenSizeChange);
      
        return () => {
          window.removeEventListener('resize', handleScreenSizeChange);
        };
      }, []);
    return (
    
    <div className='relative items-center max-w-[1640px] mx-auto flex text-sm sm:text-sm md:text-md lg:text-lg justify-between min-h-[80px] border-t-2'>
    <div className='ml-4'>
        <h2>&copy; 2023 Industrial Mercenary</h2>
        
    </div>
    <div className={isSmallScreen ? "hidden" : "flex flex-row gap-4 lg:gap-6 h-full mr-4"}>
            <button className='flex flex-row items-center gap-1 hover:underline underline-offset-4 duration-200 '>
            <AiFillInstagram size={20}/>
            <h2>mercenarindustrial</h2>   
            </button>
            <button className='flex flex-row items-center gap-1 hover:underline underline-offset-4 duration-200 '>
            <AiOutlineTwitter size={20}/>
            <h2>mercenarindustrial</h2>   
            </button>
            <button className='flex flex-row items-center gap-1 hover:underline underline-offset-4 duration-200 '>
            <AiFillFacebook size={20}/>
            <h2>mercenarindustrial</h2>   
            </button>
    </div>
    <div className={isSmallScreen ? "bg-transparent rounded-lg border-2 absolute bottom-4 right-4 min-w-[200px] flex flex-col-reverse" : "hidden"}>
            <button onClick={handleContact} className='hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 border-t-2 p-2 rounded-lg  flex flex-row items-center justify-center '>
            <IoIosArrowUp className={contact ? 'rotate-180 duration-200 mr-2' : 'rotate-0 duration-200 mr-2'}/>
            <h2>Social Media</h2>   
            </button>
            {contact && (
                <div className='flex flex-col divide-y-2'>
                <button className=' flex flex-row items-center p-2 rounded-lg hover:bg-gray-800 hover:text-gray-100 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-800 bg-white justify-center duration-200'>
                <AiFillInstagram className='mr-2'/>
                <h2>mercenarindustrial</h2>   
                </button>
                <button className='flex flex-row items-center p-2 rounded-lg hover:bg-gray-800 hover:text-gray-100 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-800 bg-white justify-center duration-200'>
                <AiOutlineTwitter className='mr-2'/>
                <h2>mercenarindustrial</h2>   
                </button>
                <button className='flex flex-row items-center p-2 rounded-lg hover:bg-gray-800 hover:text-gray-100 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-800 bg-white justify-center duration-200'>
                <AiFillFacebook className='mr-2'/>
                <h2>mercenarindustrial</h2>   
                </button>
                </div>
            )
            }
    </div>
    </div>
  )
}

export default Footer