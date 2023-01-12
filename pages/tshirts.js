import React from 'react'
import Link from 'next/link'
import Product from '../models/Product'
import mongoose from 'mongoose'

const tshirts = ({products}) => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap md:gap-20 -m-4 justify-center lg:justify-evenly items-center mx-auto">


     {
      Object.keys(products).map(item=>(
        <div key={products[item]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col justify-between shadow-lg ">
        <Link href={`/product/${products[item].slug}`} className="block relative h-full rounded overflow-hidden px-20 md:p-4">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={products[item].img}/>
        </Link>
        <div className="mt-2 mx-auto">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{products[item].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1">${products[item].price}</p>
          <div className="mt-2 flex gap-2">
            {products[item].size.includes('S') && <div className='border border-gray-400 rounded-md px-1.5 py-1 text-base'>S</div>}
            {products[item].size.includes('M') && <div className='border border-gray-400 rounded-md px-1.5 py-1 text-base'>S</div>}
            {products[item].size.includes('L') && <div className='border border-gray-400 rounded-md px-1.5 py-1 text-base'>L</div>}
            {products[item].size.includes('XL') && <div className='border border-gray-400 rounded-md px-1.5 py-1 text-base'>XL</div>}
            {products[item].size.includes('XLL') && <div className='border border-gray-400 rounded-md px-1.5 py-1 text-base'>XLL</div>}
          </div>
          <div className="mt-3 flex  gap-2">
            {products[item].color.includes('red') && <div className="bg-red-600 h-6 w-6 rounded-full"></div>}
            {products[item].color.includes('purple') && <div className="bg-purple-600 h-6 w-6 rounded-full"></div>}
            {products[item].color.includes('green') && <div className="bg-green-600 h-6 w-6 rounded-full"></div>}
            {products[item].color.includes('blue') && <div className="bg-blue-600 h-6 w-6 rounded-full"></div>}
            {products[item].color.includes('black') && <div className="bg-black h-6 w-6 rounded-full"></div>}
          </div>
        </div>
      </div>
        ))
     }    

     
    </div>
  </div>
</section>
  )
}

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find()
  
  const tshirt = {}

        for(let item of products){
            if(item.title in tshirt){
                console.log(tshirt)
                if(!tshirt[item.title].color.includes(item.color) && item.availableQty > 0){
                        tshirt[item.title].color.push(item.color)
                }
                if(!tshirt[item.title].size.includes(item.size) && item.availableQty > 0){
                    tshirt[item.title].size.push(item.size)
                }
            }
            else{
                tshirt[item.title] = JSON.parse(JSON.stringify(item))
                if(item.availableQty > 0){
                    tshirt[item.title].size = [item.size]
                    tshirt[item.title].color = [item.color]
                }
            }
        }


  return {
    props:{
      products:JSON.parse(JSON.stringify(tshirt))
    }
  }

}

export default tshirts