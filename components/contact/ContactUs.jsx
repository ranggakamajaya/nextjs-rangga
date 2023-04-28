import React from 'react'

const ContactUs = () => {
  return (
    <div className='relative w-full lg:flex'>
        {/* Banner */}
        <div className='relative w-full lg:w-2/5 h-[300px] lg:h-[700px]'>
            <div className='absolute w-full h-full bg-gray-800/20 z-10'></div>
            <img className='absolute w-full h-full object-cover' src="https://images.unsplash.com/photo-1519010470956-6d877008eaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
        </div>
        
        {/* Form Contact */}
        <div className='w-full lg:w-3/5 min-h-inherit flex items-center justify-center'>
            <form className='flex-col w-4/5 justify-center border rounded-lg p-4 my-4' action="">
            <h1 className='my-4 w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Contact Us</h1>
            <div class="flex space-x-4">
                    <div class="w-1/2">
                    <label for="firstname">First Name</label>
                    <input
                        class="border border-gray-400 dark:bg-gray-700 px-4 py-2 rounded w-full focus:outline-none focus:border-gray-900 dark:focus:border-gray-100"
                        type="text"
                        name="firstname"
                        id="firstname"
                    />
                    </div>
                    <div class="w-1/2">
                    <label for="lastname">Last Name</label>
                    <input
                        class="border border-gray-400 dark:bg-gray-700 px-4 py-2 rounded w-full focus:outline-none focus:border-gray-900 dark:focus:border-gray-100"
                        type="text"
                        name="lastname"
                        id="lastname"
                    />
                    </div>
                </div>
                <div>
                <label for="email">Email</label>
                    <input
                        class="border border-gray-400 dark:bg-gray-700 px-4 py-2 rounded w-full focus:outline-none focus:border-gray-900 dark:focus:border-gray-100"
                        type="text"
                        name="email"
                        id="email"
                    />
                </div>
                <div className=''>
                    <label htmlFor="message">Message</label> <br />
                    <textarea className='border max-h-[300px] border-gray-400 dark:bg-gray-700 px-4 py-2 rounded w-full focus:outline-none focus:border-gray-900 dark:focus:border-gray-100' name="message" id="" cols="30" rows="10"></textarea>
                </div>
                <button type='submit' className='text-white duration-200 rounded-lg bg-gray-600 dark:bg-gray-900 border hover:bg-gray-900 dark:hover:bg-gray-800 px-4 py-2'>Submit</button>
                
            </form>
            


        </div>

    </div>
  )
}

export default ContactUs