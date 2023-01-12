import React from 'react'

const forgot = () => {
  return (
    <div className='min-h-screen flex  bg-[#141516] md:pt-10'>
    <div className="flex flex-col md:px-6 py-8 mr-4 mx-auto lg:py-6">
      <a href="" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      
      Forgot password
      </a>
      <div className="bg-white rounded-lg shadow dark:border md:mt-0 w-[350px] sm:w-[400px] md:w-[500] lg:min-[600px] xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        
          <form className="space-y-6 md:space-y-8" action="#">
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 focus:outline-none" placeholder="name@company.com" required="" />
            </div>
            <buton className="relative inline-block px-4 py-2 font-medium group w-full text-center">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#3e4a5b] border-2 border-black group-hover:bg-black"></span>
              <span className="relative font-normal text-white cursor-pointer">Continue</span>
            </buton>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default forgot