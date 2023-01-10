import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 bg-black rounded-xl">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        
          Codestore
        </a>
        <div className="bg-white rounded-lg shadow dark:border md:mt-0 w-[350px] sm:w-[400px] md:w-[500] lg:min-[600px] xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                 
                  </div>
                 
                </div>
                <Link href="/forgot" className="text-sm font-medium text-white/50 hover:underline ">Forgot password?</Link>
              </div>
              <buton className="relative inline-block px-4 py-2 font-medium group w-full text-center">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-[#3e4a5b] border-2 border-black group-hover:bg-black"></span>
                <span className="relative font-normal text-white cursor-pointer">Sign in</span>
              </buton>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link href="/signup" className="font-medium text-white/50 hover:underline cursor-pointer">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login