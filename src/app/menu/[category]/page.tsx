import { pizzas } from '@/data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const categoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500 min-h-[72vh]'>
      {pizzas.map((item) => (
        <Link className='w-full h-[60vh] border-b-2 border-r-2 flex flex-col justify-between group odd:bg-red-50 even:bg-fuchsia-50 border-red-500 sm:w-1/2 lg:w-1/3 p-4'
          href={`/product/${item.id}`} key={item.id}>

          {/* Image container */}
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} alt="" fill className='object-contain' />
            </div>)}
          {/* Text container */}
          <div className="flex items-center justify-between font-bold flex-col">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="">${item.price}</h2>
            <button className="uppercase bg-red-500 text-white p-2 rounded-lg">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default categoryPage
