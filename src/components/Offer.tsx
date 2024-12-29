import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'
import Link from 'next/link'


const Offer = () => {
  return (
    <div style={{ backgroundImage: `url(/offerBg.png)` }} className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]'>
      {/* Text container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 text-white">
        <h1 className="text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className="xl:text-xl">Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
        <CountDown/>
        <button className="bg-red-500 text-white rounded-lg px-2 py-1 font-semibold hover:font-bold hover:bg-red-600"><Link href="/menu">Order Now</Link></button>
      </div>
      {/* Image container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt='' fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer