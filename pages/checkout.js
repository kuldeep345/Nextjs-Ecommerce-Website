import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { CreditCardIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQty } from '../slices/cartReducer'

const checkout = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()


  const sumQuantty = cart.cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );

  const sumPrice = cart.cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0,
  );


  return (
    <div className='min-h-screen p-4 md:p-10 flex flex-col items-center gap-3 w-[109vw] sm:w-[100vw]'>

      <h1 className='text-xl text-gray-700 tracking-wider'>Checkout</h1>

      <div className="block mt-4 mx-6 rounded-lg shadow-lg bg-white w-[90%] xl:w-[80%] 2xl:w-[60%] 3xl:w-[50%]">
        <form >
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blu focus:outline-none" id="exampleInput123"
                namee="name" placeholder="Name" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blu focus:outline-none" id="exampleInput124"
                name="email" placeholder="Email Address" />
            </div>
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blu focus:outline-none" id="exampleInput125" name="address"
              placeholder="Address" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blu focus:outline-none" id="exampleInput123"
                name="phone" placeholder="Phone" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blu focus:outline-none" id="exampleInput124"
                name="city" placeholder="City" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blu focus:outline-none" id="exampleInput123"
                name='state' placeholder="State" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blu focus:outline-none" id="exampleInput124"
                name="pincode" placeholder="Pincode" />
            </div>
          </div>
        </form>
      </div>


      <h1 className='text-xl text-gray-700 tracking-wider mt-6'>Review cart items</h1>
      <div className="block mt-4 mx-6 p-3 md:p-6 rounded-lg shadow-lg bg-[#101112] w-[90%] xl:w-[80%] 2xl:w-[60%] 3xl:w-[50%]">

        {cart?.cart.map((item, i) => (
          <div className='flex justify-between w-full text-white pb-2'>
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


        <div className='pt-5 pb-3'>
          <h2 className='text-white'>Subtotal:{" "}₹{sumQuantty * sumPrice}</h2>
        </div>
        <button className="relative mr-auto inline-flex items-center justify-center mt-2 px-4 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-52"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <div className="relative flex items-center justify-center gap-1">
          <CreditCardIcon className='h-5 group-hover:text-black'/>
          <span className='text-white text-base group-hover:text-black font-normal tracking-wider font-Robboto'>Pay{" "}₹{sumQuantty * sumPrice}</span>
        </div>
      </button>


      </div>

   

    </div>
  )
}

export default checkout