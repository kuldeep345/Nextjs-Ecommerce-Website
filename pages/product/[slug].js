import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import {addToCart , clearCart} from '../../slices/cartReducer';
import {closeSidebar} from '../../slices/sidebarReducer';
import {openSidebar} from '../../slices/sidebarReducer';
import mongoose from 'mongoose';
import Product from '../../models/Product';
import {toast} from 'react-toastify'

const Post = ({product , variants}) => {

  const router = useRouter()
  const { slug } = router.query
  const dispatch = useDispatch()
  const [ pin , setPin ] = useState("")
  const [ service , setService ] = useState()

  const [ color , setColor ] = useState(product.color) 
  const [size , setsSize] = useState(product.size)

  const checkAvailability = async(e)=>{
    e.preventDefault()
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    const pinJson = await pins.json()
    
    if(pinJson.includes(pin)){
      setService(true)
      toast.success('your pincode is serviceable', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else{
      setService(false)
      toast.error('Sorry ,your pincode is not serviceable', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }

  const refreshVariant = (newsize , newcolor)=>{
    let url = `/product/${variants[newcolor][newsize]['slug']}`
    window.location.href = url
  }

  const buyNow = async(e)=>{
    e.preventDefault()
      await dispatch(clearCart())
      await dispatch(addToCart({
        id:product.slug, 
        quantity:product.quantity,
        price:product.price,
        name:product.title,
        variant:product.size,
        color:product.color
      }))
      await dispatch(closeSidebar())
      router.push("/checkout")
  }

  return (
    <section className="text-gray-600 body-font w-[100vw] !overflow-auto">
      <div className="container px-5 pt-10 md:py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap gap-3 md:gap-20">
          <img alt="ecommerce" className="lg:w-[35%] w-full lg:h-auto h-80 object-contain object-center rounded" src={product.img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} ({product.size}/{product.color})</h1>
            {/* <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div> */}
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {Object.keys(variants).includes('white') && Object.keys(variants['white']).includes(size) && <button onClick={()=>refreshVariant(size , 'white')} className={`border-2 rounded-full w-6 h-6 focus:outline-none ${color==='white' ? 'border-black' : 'border-gray-300'} `}></button>}
                {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(size) && <button onClick={()=>refreshVariant(size , 'red')} className={`border-2 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none ${color==='red' ? 'border-black' : 'border-gray-300'} `}></button>}
                {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(size) && <button onClick={()=>refreshVariant(size , 'green')} className={`border-2 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${color==='green' ? 'border-black' : 'border-gray-300'} `}></button>}
                {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(size) && <button onClick={()=>refreshVariant(size , 'blue')} className={`border-2 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color==='blue' ? 'border-black' : 'border-gray-300'} `}></button>}
                {Object.keys(variants).includes('purple') &&  Object.keys(variants['purple']).includes(size) &&<button onClick={()=>refreshVariant(size , 'purple')} className={`border-2 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none ${color==='purple' ? 'border-black' : 'border-gray-300'} `}></button>}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select value={size} onChange={(e)=>{
                    e.preventDefault()
                    refreshVariant( e.target.value , color)
                    }}
                     className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    {Object.keys(variants[color]).includes('S') && <option>S</option>}
                    {Object.keys(variants[color]).includes('M') && <option>M</option>}
                    {Object.keys(variants[color]).includes('L') && <option>L</option>}
                    {Object.keys(variants[color]).includes('XL') && <option>XL</option>}
                    {Object.keys(variants[color]).includes('XXL') && <option>XXL</option>}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>

              <a href="" onClick={(e)=>buyNow(e)} className="relative ml-3 md:ml-6 inline-block px-4 py-1.5 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Buy Now</span>
              </a>

              <a href="" onClick={(e)=>{
                e.preventDefault()
                dispatch(addToCart({
                id:product.slug, 
                quantity:product.quantity,
                price:product.price,
                name:product.title,
                variant:product.size,
                color:product.color
              }))
             
              toast.success('Product added to cart', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

              dispatch(openSidebar())
              }} className="ml-auto relative inline-block px-4 py-1.5 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Add To Cart</span>
              </a>
            
            </div>
            <div className="flex items-center mt-8 justify-start gap-10 mb-2">
              <input onChange={(e)=>setPin(e.target.value)} className="title-font py-1 px-2 font-medium text-lg text-gray-700 w-28 border border-gray-400 focus:outline-none rounded-sm" placeholder='Pincode' />
              <a href="" onClick={checkAvailability} className="relative inline-block px-4 py-1.5 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Check</span>
              </a>
            </div>
            {service && service != null && <span className="text-[0.8rem] mt-3 font-semibold font-Sans text-green-600">yay! This pincode is serviceable</span>} 
            {!service && service != null && <span className='text-[0.8rem] mt-3 font-semibold font-sans text-red-600'>Sorry! we do not deliver to this pincode yet</span>}
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI)
  }

  let product = await Product.findOne({slug:context.query.slug})
  let variants = await Product.find({title:product.title})


  let colorSizeSlug = {}

  for(let item of variants){

    if(Object.keys(colorSizeSlug).includes(item.color)){
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
    else{
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }

  return {
    props:{
      product:JSON.parse(JSON.stringify(product)),
      variants:JSON.parse(JSON.stringify(colorSizeSlug))
    }
  }
}

export default Post