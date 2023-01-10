import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tabb from '../components/Tab'

const order = () => {

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
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-3">Order Id: #89777</h1>
        <h2 class="text-sm title-font text-gray-500 tracking-wide mb-2">Your order has been successfully placed</h2>
        <div class="flex mb-4">
         <Tabb/>

        </div>
         <h1 class="text-gray-900 text-2xl title-font font-medium mb-3">Subtotal:{" "}₹{sumQuantty * sumPrice}</h1>

         <button className="relative inline-block mt-2 px-4 py-1.5 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Track Order</span>
              </button>
       
     
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
  )
}

export default order