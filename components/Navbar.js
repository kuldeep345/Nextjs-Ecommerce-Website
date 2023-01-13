import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'
import { XMarkIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline/'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQty, removeItem } from '../slices/cartReducer'
import { openSidebar , closeSidebar } from '../slices/sidebarReducer'

const Navbar = () => {
  const cart = useSelector(state => state.cart.cart)

  const isCart = useSelector(state => state.sidebar.isCart)


  const dispatch = useDispatch()
  
  const sumQuantty = cart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );

  const sumPrice = cart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0,
  );



  return (
    <div className='flex sticky top-0  justify-between z-50 items-center bg-[#060002] py-6 sm:px-8 md:px-16  '>
      <div className='nav'>
        <ul className="flex gap-6 md:gap-14 text-white items-center font-normal md:text-xl">
          <Link href={`/`}><li className='ml-4 hover:scale-110 duration-400 ease-in-out'>Home</li></Link>
          <Link href={`/tshirts`}><li className='ml-4 hover:scale-110 duration-400 ease-in-out'>TShirts</li></Link>
          <Link href={`/hoodies`}><li className='hover:scale-110 duration-400 ease-in-out'>Hoodies</li></Link>
          <Link href={`/mugs`}><li className='hover:scale-110 duration-400 ease-in-out'>Mugs</li></Link>
        </ul>
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-8 mr-2">
        <Link href="/login" className='mt-2'><button><UserCircleIcon className=' hover:scale-125 duration-400 ease-in-out md:h-[40px] text-white h-[34px] '/></button></Link>
        <button onClick={() => dispatch(openSidebar())}><FaShoppingCart className='text-2xl hover:scale-125 duration-400 ease-in-out md:text-3xl text-white' /></button>
      </div>

      <div className={`fixed z-50 top-0 right-0 h-[100vh] w-[375px] bg-[#060002] ${isCart ? 'translate-x-0 ease-in-out' : 'translate-x-96 ease-out '} duration-500 transition delay-100`}>
        <div className='relative h-full w-full'>
          <XMarkIcon onClick={() => dispatch(closeSidebar())} className='absolute -top-[20px] right-6 text-white h-8 hover:scale-125  duration-400 ease-in-out cursor-pointer' />

          <h2 className='text-xl text-white font-normal text-center mt-10'>Shopping Cart</h2>


          {cart?.map((item, i) => (
            <div key={i} className='flex justify-between w-full px-4 text-white pt-7'>
              <div className='flex w-3/4 items-center'>
                <span className='mr-2'>{i + 1}</span>
                <p className="font-Poppins break-all">{item.name}</p>
              </div>
              <div className='flex gap-3 w-1/4 items-center justify-center'>
                <MinusCircleIcon onClick={() => dispatch(decreaseQuantity(item))} className='h-6 hover:scale-110 duration-300' />
                <span>{item.quantity}</span>
                <PlusCircleIcon onClick={() => dispatch(increaseQty(item))} className='h-6 hover:scale-110 duration-300' />
              </div>
            </div>
          ))
          }

          <div className='mt-10 ml-6'>
            <h2 className='text-white'>Subtotal:{" "}₹{sumQuantty * sumPrice}</h2>
          </div>

          <div className="w-full mt-3 flex items-center justify-center gap-6">

            <Link href='/checkout' ><button onClick={() => dispatch(closeSidebar())} className="mt-1.5 relative inline-flex items-center justify-center p-4 px-[2.2rem] py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-4 border-white rounded-md shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-fullh-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute flex gap-1 items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease text-xl">
                <ShoppingBagIcon className='h-6 mb-[2px] text-white font-Sans font-medium tracking-wide' />
                <span className="relative text-white font-Sans font-medium tracking-wide text-base">Checkout</span>
                </div>
              <span className="relative invisible ">Checkout</span>
            </button></Link>

            <button className="relative inline-flex items-center justify-center font- px-4 py-[0.69rem] text-lg tracking-tighter text-white bg-gray-800 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-white rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-black rounded-md border border-white"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-white rounded-md opacity-0 group-hover:opacity-100"></span>
              <span className="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-black font-Sans font-medium group-hover:font-semibold tracking-wide text-base">Clear cart</span>
            </button>

          </div>


        </div>


      </div>

    </div>
  )
}

export default Navbar