import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

const menuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map(category=>(
        <Link href={`/menu/${category.slug}`} key={category.id}
         className='w-full h-1/3 bg-cover p-8 md:h-1/2' 
         style={{backgroundImage: `url(${category.img})`}}>

          <div className={`text-${category.color} w-full xl:w-full space-y-1 md:space-y-4`}>
            <h1 className="uppercase font-bold text-xl w-26 md:text-3xl">{category.title}</h1>
            <p className="text-sm my-2 xl:w-1/2 md:w-1/2  ">{category.desc}</p>
            <button className={`hidden 2xl:block text-white bg-black hover:font-bold font-semibold py-2 px-4 rounded-lg`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default menuPage
