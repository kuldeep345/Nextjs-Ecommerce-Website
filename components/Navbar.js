import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'
import { XMarkIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline/'
import { ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'

const Navbar = () => {

  const [isCart, setCart] = useState(false)

  return (
    <div className='flex justify-between  items-center bg-[#060002] py-6 px-0 md:px-4  '>
      <div className='nav'>
        <ul className="flex gap-6 md:gap-14 text-white items-center font-normal md:text-xl">
          <Link href={`/`}><li className='ml-4 hover:scale-110 duration-400 ease-in-out'>Home</li></Link>
          <Link href={`/tshirts`}><li className='ml-4 hover:scale-110 duration-400 ease-in-out'>TShirts</li></Link>
          <Link href={`/hoodies`}><li className='hover:scale-110 duration-400 ease-in-out'>Hoodies</li></Link>
          <Link href={`/mugs`}><li className='hover:scale-110 duration-400 ease-in-out'>Mugs</li></Link>
        </ul>
      </div>

      <div className="cart">
        <button onClick={() => setCart(true)}><FaShoppingCart className='text-xl mr-4 hover:scale-125 duration-400 ease-in-out md:text-3xl text-white' /></button>
      </div>

      <div className={`fixed z-50 top-0 right-0 h-[100vh] w-[375px] bg-[#060002] ${isCart ? 'translate-x-0 ease-in-out' : 'translate-x-96 ease-out '} duration-500 transition delay-100`}>
        <div className='relative h-full w-full'>
          <XMarkIcon onClick={() => setCart(false)} className='absolute top-[-20px] right-6 text-white h-8 hover:scale-125  duration-400 ease-in-out cursor-pointer' />

          <h2 className='text-xl text-white font-normal text-center mt-10'>Shopping Cart</h2>

          <div className='flex justify-between w-full px-4 text-white pt-7'>
            <div className='flex w-3/4 items-center'>
              <span className='mr-2'>1.</span>
              <p className="font-Poppins break-all">Tshirt - Wear the code</p>
            </div>
            <div className='flex gap-3 w-1/4 items-center justify-center'>
              <MinusCircleIcon className='h-6 hover:scale-110 duration-300' />
              <span>1</span>
              <PlusCircleIcon className='h-6 hover:scale-110 duration-300' />
            </div>
          </div>



          <div className='flex justify-between w-full px-4 text-white pt-7'>
            <div className='flex w-3/4 items-center'>
              <span className='mr-2'>1.</span>
              <p className="font-Poppins break-all">Tshirt - Wear the code</p>
            </div>
            <div className='flex gap-3 w-1/4 items-center justify-center'>
              <MinusCircleIcon className='h-6 hover:scale-110 duration-300' />
              <span>1</span>
              <PlusCircleIcon className='h-6 hover:scale-110 duration-300' />
            </div>
          </div>



          <div className='flex justify-between w-full px-4 text-white pt-7'>
            <div className='flex w-3/4 items-center'>
              <span className='mr-2'>1.</span>
              <p className="font-Poppins break-all">Tshirt - Wear the code</p>
            </div>
            <div className='flex gap-3 w-1/4 items-center justify-center'>
              <MinusCircleIcon className='h-6 hover:scale-110 duration-300' />
              <span>1</span>
              <PlusCircleIcon className='h-6 hover:scale-110 duration-300' />
            </div>
          </div>



          <div className='flex justify-between w-full px-4 text-white pt-7'>
            <div className='flex w-3/4 items-center'>
              <span className='mr-2'>1.</span>
              <p className="font-Poppins break-all">Tshirt - Wear the code</p>
            </div>
            <div className='flex gap-3 w-1/4 items-center justify-center'>
              <MinusCircleIcon className='h-6 hover:scale-110 duration-300' />
              <span>1</span>
              <PlusCircleIcon className='h-6 hover:scale-110 duration-300' />
            </div>
          </div>


          <div className="w-full mt-10 flex items-center justify-center">

            <a href="#_" class="relative inline-flex items-center justify-center p-4 px-[2.4rem] py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-4 border-white rounded-md shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-fullh-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute flex gap-1 items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease text-xl">
                <ShoppingBagIcon className='h-6 mb-[2px] text-white'/>Checkout</span>
              <span class="relative invisible">Checkout</span>
            </a>

          </div>


        </div>


      </div>

    </div>
  )
}

export default Navbar